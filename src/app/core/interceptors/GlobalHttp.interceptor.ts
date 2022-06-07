import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { filter, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMarvelApi } from '../models/marvelApi.interface';
import { IMarvelObject } from '../models/marvelObject.interface';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

  constructor() {}

  private getDetailsUrl(urls: {type: string; url: string}[]): string {
    return urls.filter(item => item.type === 'detail')[0].url;
  }

  private transformIntoMarvelBody(results: any[]): IMarvelObject[] {
    const marvel: IMarvelObject[] = [];
    for (const result of results) {
      marvel.push(
        {
          characters: result.characters ? result.characters.collectionURI : null,
          creators: result.creators ? result.creators.collectionURI : null,
          images: result.images && result.images.length > 0 ? result.images[0] : null,
          price: result.prices && result.prices.length > 0 ? result.prices[0].price : null,
          title: result.title,
          comics: result.comics ? result.comics.collectionURI : null,
          name: result.name ? result.name : (result.fullName ? result.fullName : null),
          details: result.urls ? this.getDetailsUrl(result.urls) : null
        }
      );
    }
    return marvel;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<IMarvelApi>> {
    request = request.clone({
      url: request.url + '?apikey=' + environment.apiKey
    });
    return next.handle(request).pipe(
      filter(ret => ret instanceof HttpResponse),
      map(ret => {
        const { body } = ret as HttpResponse<any>;
        console.log('body da api --> ', body);
        if (body.status === 'Ok' && body.code === 200) {
          const marvel: IMarvelApi = {
            minIndice: body.data.offset,
            maxIndice: body.data.limit,
            total: body.data.total,
            data: this.transformIntoMarvelBody(body.data.results)
          };
          const response = ret as HttpResponse<any>;
          ret = response.clone({
            body: marvel
          });
          return ret;
        }
        return ret;
      })
    );
  }
}
