import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urlPathHandler, UrlsList} from "../../../../utils/urls.util";
import {Observable, take} from "rxjs";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  deleteUser(id: string): Observable<any> {
    const url = urlPathHandler(UrlsList.user, id);
    return this.http.delete(url).pipe(take(1));
  }
}
