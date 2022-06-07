import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { IMarvelApi } from "src/app/core/models/marvelApi.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class ComicsService {
    constructor(private http: HttpClient) {}

    public getComics(): Promise<IMarvelApi> {
        return firstValueFrom(this.http.get<IMarvelApi>(environment.urlApi + 'v1/public/comics'));
    }
}