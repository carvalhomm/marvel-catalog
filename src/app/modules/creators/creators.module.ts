import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorsComponent } from './creators.component';
import { CreatorsRoutes } from './creators.routes';
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
  ]
})
export class CreatorsModule { }
