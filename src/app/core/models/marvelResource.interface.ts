export interface IMarvelResource {
    name: string;
    image: {path: string; extension: string};
    details: string;
    urlDetails: string;
    comics: {name: string; resourceURI: string}[];
    characters: {name: string; resourceURI: string}[];
    creators: {name: string; resourceURI: string}[];
    series: {name: string; resourceURI: string}[];
}