import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersRoutes } from './characters.routes';
import { CharactersGuard } from './characters.guard';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CharactersRoutes
  ],
  providers: [
    CharactersGuard
  ]
})
export class CharactersModule { }
