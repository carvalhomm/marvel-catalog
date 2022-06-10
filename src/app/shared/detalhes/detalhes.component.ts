import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IMarvelResource } from 'src/app/core/models/marvelResource.interface';
import { DetalhesService } from './detalhes.service';

type Itype = 'comics' | 'series' | 'characters' | 'creators';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
  providers: [DetalhesService]
})
export class DetalhesComponent implements OnInit, OnChanges {
  @Input() public detalhesUrl: string;
  @Input() public type: 'creators' | 'characters' | 'comics';
  @Output() public voltar = new EventEmitter<boolean>();
  public resource: IMarvelResource;
  public anexos: Itype[];
  constructor(private detalhesService: DetalhesService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.detalhesUrl) { return; }
    const types: {[key: string]: Itype[]} = {
      creators: ['comics', 'series'],
      characters: ['comics', 'series'],
      comics: ['characters', 'creators']
    };
    this.anexos = types[this.type];
    this.detalhesService.getDetalhes(this.detalhesUrl).then(result => {
      this.resource = result;
    }).catch(error => {
      console.log('erro ao consultar detalhes do recurso --> ', error);
    });
  }

  public openExternal(url: string) {
    window.open(url, '_blank');
  }

  public voltarListagem() {
    this.voltar.emit(true);
  }

}
