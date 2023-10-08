import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay, take} from "rxjs";
import {IHeaderLocale} from "./header.interface";
import {localePath} from "../../utils/locale";
import {headerFileName} from "../shared.contants";

@Injectable()
export class HeaderService {

  constructor(private http: HttpClient) {
  }

  getLocale(): Observable<IHeaderLocale> {
    const url = localePath(headerFileName);
    return this.http.get<IHeaderLocale>(url).pipe(take(1));
  }
}
