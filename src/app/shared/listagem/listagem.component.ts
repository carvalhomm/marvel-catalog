import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IMarvelApi } from 'src/app/core/models/marvelApi.interface';
import { IMarvelObject } from 'src/app/core/models/marvelObject.interface';

type Itype = 'creators' | 'characters' | 'comics'; 

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit, OnChanges {
  @Input() public type: 'creators' | 'characters' | 'comics';
  @Input() public data: IMarvelApi;
  @Output() public openDetalhes = new EventEmitter<string>();
  public lista: IMarvelObject[];
  public anexos: Itype[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes --> ', changes);
    if (this.data) {
      this.lista = this.data.data;
    }
    const types: {[key: string]: Itype[]} = {
      creators: ['comics'],
      characters: ['comics'],
      comics: ['characters', 'creators']
    };
    this.anexos = types[this.type];
  }

  public goToAnexo(url: string) {
    console.log('url anexo --> ', url);
  }

  public openDetails(url: string) {
    console.log('details: ', url);
    this.openDetalhes.emit(url);
  }

  public openDetailsExternal(url: string) {
    window.open(url, '_blank');
  }

}
