export interface IBookDto {
  _id: string;
  author: string;
  alternate_name: string;
  book: book[];
  bookGenres: string[];
  bookName: string;
  bookTags: string[];
  chapterLength: number;
  country: string;
  descriptionText: string;
  file: string[];
  images: string[];
  released: Date;
  status: string;
  translating: string;
  type: string;
  //timestamp
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type IBookLazy = Pick<IBookDto, '_id'>;
type book = {title: string, id: number}
