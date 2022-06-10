import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';
import { CreatorsRoutes } from './creators.routes';
import { CreatorsService } from './creators.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CreatorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreatorsRoutes
  ],
  providers: [
    CreatorsService
  ]
})
export class CreatorsModule { }
