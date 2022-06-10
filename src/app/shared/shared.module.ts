import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListagemComponent } from './listagem/listagem.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DetalhesComponent } from './detalhes/detalhes.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ListagemComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    ListagemComponent,
    DetalhesComponent
  ]
})
export class SharedModule { }
