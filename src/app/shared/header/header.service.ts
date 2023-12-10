import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {localePath} from "../../utils/locale.util";
import {headerFileName} from "../shared.contants";
import {IHeaderLocale} from "../locale.interface";

@Injectable()
export class HeaderService {

  constructor(private http: HttpClient) {
  }

  getLocale(): Observable<IHeaderLocale> {
    const url = localePath(headerFileName);
    return this.http.get<IHeaderLocale>(url).pipe(take(1));
  }
}
