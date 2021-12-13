//quicktype.io
export interface LoadNews {
    pagination: Pagination;
    data:       Datum[];
}

export interface Datum {
    author:       null | string;
    title:        string;
    description:  string;
    url:          string;
    source:       string;
    image:        null | string;
    category:     Category;
    language:     Language;
    country:      string;
    published_at: Date;
}

export enum Category {
    General = "general",
}

export enum Language {
    Es = "es",
}

export interface Pagination {
    limit:  number;
    offset: number;
    count:  number;
    total:  number;
}

export interface ArticlesByCategoryAndPage {
    [key: string] : {
        page: number,
        data: Datum[]
    }
}