import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, take} from "rxjs";
import {IBookDto} from "../../admin/pages/books/books.interface";
import {urlPathHandler, UrlsList} from "../../utils/urls.util";

@Injectable({
  providedIn: 'root'
})
export class BookInformationService {
  book!: IBookDto;

  constructor(private http: HttpClient) {
  }

  getBook(id: string): Observable<IBookDto> {
    const url = urlPathHandler(UrlsList.book, id);
    return this.http.get<IBookDto>(url)
      .pipe(
        take(1),
        map((book) => {
          book.book =
            book.book.map((chapter, i) => {
              chapter.id = i;
              return chapter;
            });
          this.book = book;
          return book;
        }));
  }
}
