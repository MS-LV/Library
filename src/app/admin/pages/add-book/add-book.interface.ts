export interface IAddBookForm {
    author: string;
    bookGenres: string[];
    bookTags: string[];
    descriptionText: string;
    alternate_name: string;
    published: string;
    country: string[];
    files: FormData;
}

export interface IBookScanCharacter {
    numPages: number;
    pages: Array<IBookLineCharacter[]>;
}

export interface IBookLineCharacter {
    dir: string;
    str: string;
}

export interface IBookChapterCharacter extends IBookGenerateChapter {
    content: IBookLineCharacter[][]
}

export interface IBookGenerateChapter {
    startPage: number;
    endPage: number;
    title: string;
}
