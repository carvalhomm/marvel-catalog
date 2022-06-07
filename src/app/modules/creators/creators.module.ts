import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';
import { CreatorsRoutes } from './creators.routes';
import { CreatorsService } from './creators.service';



@NgModule({
  declarations: [
    CreatorsComponent
  ],
  imports: [
    CommonModule,
    CreatorsRoutes
  ],
  providers: [
    CreatorsService
  ]
})
export class CreatorsModule { }
