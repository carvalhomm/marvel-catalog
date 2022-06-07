import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutes } from './characters.routes';
import { CharactersGuard } from './characters.guard';
import { CharactersService } from './characters.service';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutes
  ],
  providers: [
    CharactersGuard,
    CharactersService
  ]
})
export class CharactersModule { }
