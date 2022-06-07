import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsComponent } from './comics.component';
import { ComicsRoutes } from './comics.routes';
import { ComicsService } from './comics.service';



@NgModule({
  declarations: [
    ComicsComponent
  ],
  imports: [
    CommonModule,
    ComicsRoutes
  ],
  providers: [
    ComicsService
  ]
})
export class ComicsModule { }
