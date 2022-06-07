import { Component, OnInit } from '@angular/core';
import { CreatorsService } from './creators.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  constructor(private creatorsService: CreatorsService) { }

  ngOnInit(): void {
    this.creatorsService.getCreators().then(result => {
      console.log('creators api -->', result);
    }).catch(error => {
      console.log('error creators api --> ', error);
    });
  }

}
