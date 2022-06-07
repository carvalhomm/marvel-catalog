import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { IMarvelApi } from "src/app/core/models/marvelApi.interface";
import { environment } from "src/environments/environment";

@Injectable()
export class CharactersService {
    constructor(private Http: HttpClient) {}

    public getCharacters(): Promise<IMarvelApi> {
        return firstValueFrom(this.Http.get<IMarvelApi>(environment.urlApi + 'v1/public/characters'));
    }
}