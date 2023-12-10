import {Injectable} from '@angular/core';
import {Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {localePath} from "../../utils/locale.util";
import {footerFileName} from "../shared.contants";
import {IFooterLocale} from "../locale.interface";

@Injectable()
export class FooterService {

  constructor(private http: HttpClient) {
  }

  getLocale(): Observable<IFooterLocale> {
    const url = localePath(footerFileName);
    return this.http.get<IFooterLocale>(url).pipe(take(1));
  }
}
