export interface IBook {
    id: string;
    title: string;
    categories: string[];
    authors: string[];
    photoURL: string;
    description?: string;
}