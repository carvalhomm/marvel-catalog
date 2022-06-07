import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then(modulo => modulo.CharactersModule)
  },
  {
    path: 'comics', loadChildren: () => import('./modules/comics/comics.module').then(modulo => modulo.ComicsModule)
  },
  {
    path: 'creators', loadChildren: () => import('./modules/creators/creators.module').then(modulo => modulo.CreatorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
