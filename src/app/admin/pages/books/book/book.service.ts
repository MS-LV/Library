import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {urlPathHandler, UrlsList} from "../../../../utils/urls.util";

@Injectable()
export class BookService {

  constructor(private http: HttpClient) {
  }

  deleteBook(id: string): Observable<any> {
    const url = urlPathHandler(UrlsList.book, id);
    return this.http.delete(url).pipe(take(1));
  }
}
