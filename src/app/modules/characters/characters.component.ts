import { Component, OnInit } from '@angular/core';
import { IMarvelApi } from 'src/app/core/models/marvelApi.interface';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public data: IMarvelApi = null;
  public isListagem: boolean = true;
  public detalhesUrl: string;
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().then(result => {
      this.data = result;
    }).catch(error => {
      console.log('error character api --> ', error);
    });
  }

  public openDetalhes(url: string) {
    this.isListagem = false;
    this.detalhesUrl = url;
  }

  public openListagem(flag: boolean) {
    this.isListagem = true;
    this.detalhesUrl = null;
  }

}
