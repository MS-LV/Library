import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take, tap} from "rxjs";
import {urlPathHandler, UrlsList} from "../utils/urls.util";
import {IBookDto} from "../admin/pages/books/books.interface";

@Injectable()
export class PersonalService {

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<IBookDto[]> {
    const url = urlPathHandler(UrlsList.book);
    return this.http.get<IBookDto[]>(url)
      .pipe(
        take(1),
        tap((books) => {
          console.log('books: ', books);
        }));
  }
}
