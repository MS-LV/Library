import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take, tap} from "rxjs";
import {urlPathHandler, UrlsList} from "../../../utils/urls.util";
import {IBookDto, IBookLazy} from "./books.interface";


@Injectable()
export class BooksService {

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<IBookLazy[]> {
    const url = urlPathHandler(UrlsList.bookLazy);
    return this.http.get<IBookLazy[]>(url)
      .pipe(
        take(1),
        tap((value) => {
          // console.log('value: ', value);
        })
      );
  }
}
