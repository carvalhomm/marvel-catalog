import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { ComicsRoutes } from './comics.routes';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComicsRoutes
  ],
  providers: [
  ]
})
export class ComicsModule { }
