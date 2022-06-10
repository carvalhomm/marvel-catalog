export interface IMarvelObject {
    characters: string;
    creators: string;
    comics: string;
    images: {path: string; extension: string};
    price: number;
    title: string;
    name: string;
    details: string;
    description: string;
    resourceUri: string;
}