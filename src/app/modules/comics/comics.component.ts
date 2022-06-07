import { Component, OnInit } from '@angular/core';
import { ComicsService } from './comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsService: ComicsService) { }

  ngOnInit(): void {
    this.comicsService.getComics().then(value => {
      console.log('comics API --> ', value);
    }).catch(error => {
      console.log('erro comics api --> ', error);
    });
  }

}
