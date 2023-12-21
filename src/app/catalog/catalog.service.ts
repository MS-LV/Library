import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {IBookDto} from "../admin/pages/books/books.interface";
import {urlPathHandler, UrlsList} from "../utils/urls.util";

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) {
  }

  getBooks(query = '?query='): Observable<IBookDto[]> {
    const url = urlPathHandler(UrlsList.book + query);
    return this.http.get<IBookDto[]>(url).pipe(take(1));
  }
}
