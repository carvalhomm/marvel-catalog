import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalHttpInterceptor } from './interceptors/GlobalHttp.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      multi: true,
      useClass: GlobalHttpInterceptor,
      provide: HTTP_INTERCEPTORS
    },
    ApiService
  ]
})
export class CoreModule { }
