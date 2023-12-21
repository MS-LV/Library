import {IBookChapterCharacter} from "../../admin/pages/add-book/add-book.interface";

export interface IChapterDto {
  bookName: string;
  book: IBookChapterCharacter[]
}
