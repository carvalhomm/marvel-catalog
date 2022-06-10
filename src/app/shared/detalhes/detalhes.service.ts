import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { IMarvelResource } from "src/app/core/models/marvelResource.interface";

@Injectable()
export class DetalhesService {
    constructor(private http: HttpClient) {}

    public getDetalhes(url: string): Promise<IMarvelResource> {
        return firstValueFrom(this.http.get<IMarvelResource>(url));
    }
}