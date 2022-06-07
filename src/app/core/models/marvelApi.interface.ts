import { IMarvelObject } from "./marvelObject.interface";

export interface IMarvelApi {
    data: IMarvelObject[];
    total: number;
    minIndice: number;
    maxIndice: number;
}