import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {urlPathHandler, UrlsList} from "../../../utils/urls.util";
import {IBookDto} from "./books.interface";

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<IBookDto[]> {
    const url = urlPathHandler(UrlsList.book)
    return this.http.get<IBookDto[]>(url).pipe(take(1));
  }
}
