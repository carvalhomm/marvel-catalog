import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharactersGuard } from './characters.guard';

const routes: Routes = [
  {
    path: '', canActivate: [CharactersGuard], component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutes { }