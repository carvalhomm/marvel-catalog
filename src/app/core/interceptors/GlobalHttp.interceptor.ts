import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMarvelApi } from '../models/marvelApi.interface';
import { IMarvelObject } from '../models/marvelObject.interface';
import { IMarvelResource } from '../models/marvelResource.interface';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

  constructor() {}

  private getDetailsUrl(urls: {type: string; url: string}[]): string {
    return urls.filter(item => item.type === 'detail')[0].url;
  }

  private transformIntoMarvelBodyDetails(results: any[]): IMarvelResource {
    const result = results[0];
    return {
      characters: result.characters ? result.characters.items : null,
      creators: result.creators ? result.creators.items : null,
      comics: result.comics ? result.comics.items : null,
      series: result.series ? result.series.items : null,
      image: result.images && result.images.length > 0 ? result.images[0] : (result.thumbnail ? result.thumbnail : null),
      name: result.title ? result.title : (result.name ? result.name : (result.fullName ? result.fullName : null)),
      details: result.description,
      urlDetails: this.getDetailsUrl(result.urls)
    };
  }

  private transformIntoMarvelBody(results: any[]): IMarvelObject[] {
    const marvel: IMarvelObject[] = [];
    for (const result of results) {
      marvel.push(
        {
          characters: result.characters ? result.characters.collectionURI : null,
          creators: result.creators ? result.creators.collectionURI : null,
          images: result.images && result.images.length > 0 ? result.images[0] : (result.thumbnail ? result.thumbnail : null),
          price: result.prices && result.prices.length > 0 ? result.prices[0].price : null,
          title: result.title,
          comics: result.comics ? result.comics.collectionURI : null,
          name: result.name ? result.name : (result.fullName ? result.fullName : null),
          description: result.description,
          details: result.urls ? this.getDetailsUrl(result.urls) : null,
          resourceUri: result.resourceURI
        }
      );
    }
    return marvel;
  }

  private checkListagemRequest(url: string): boolean {
    const [path] = url.split('?apikey');
    const nome = path.substring(path.lastIndexOf('/') + 1);
    const types: {[key: string]: boolean} = {
      creators: true,
      characters: true,
      comics: true
    };
    return types[nome];
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<IMarvelApi>> {
    request = request.clone({
      url: request.url + '?apikey=' + environment.apiKey
    });
    return next.handle(request).pipe(
      filter(ret => ret instanceof HttpResponse),
      map(ret => {
        const { body, url } = ret as HttpResponse<any>;
        console.log('body da api --> ', body);
        if (this.checkListagemRequest(url)) {
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
          }
        } else {
          if (body.status === 'Ok' && body.code === 200) {
            const response = ret as HttpResponse<any>;
            const marvel = this.transformIntoMarvelBodyDetails(body.data.results);
            ret = response.clone({
              body: marvel
            });
          }
        }
        return ret;
      })
    );
  }
}
