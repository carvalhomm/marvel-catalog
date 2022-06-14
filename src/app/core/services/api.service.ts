import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
import { IMarvelApi } from "../models/marvelApi.interface";

@Injectable()
export class ApiService {
    private paths = {
        characters: 'v1/public/characters',
        comics: 'v1/public/comics',
        creators: 'v1/public/creators'
    };
    constructor(private http: HttpClient) {}

    public getApi(type: 'characters' | 'comics' | 'creators'): Promise<IMarvelApi> {
        return firstValueFrom(this.http.get<IMarvelApi>(environment.urlApi + this.paths[type]));
    }
}