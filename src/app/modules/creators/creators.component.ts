import { Component, OnInit } from '@angular/core';
import { IMarvelApi } from 'src/app/core/models/marvelApi.interface';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {
  public data: IMarvelApi = null;
  public isListagem: boolean = true;
  public detalhesUrl: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getApi('creators').then(result => {
      this.data = result;
    }).catch(error => {
      console.log('error creators api --> ', error);
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
