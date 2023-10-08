import {Injectable} from '@angular/core';
import {Observable, shareReplay, take} from "rxjs";
import {IFooterLocale} from "./footer.interface";
import {HttpClient} from "@angular/common/http";
import {localePath} from "../../utils/locale";
import {footerFileName} from "../shared.contants";

@Injectable()
export class FooterService {

  constructor(private http: HttpClient) {
  }

  getLocale(): Observable<IFooterLocale> {
    const url = localePath(footerFileName);
    return this.http.get<IFooterLocale>(url).pipe(take(1));
  }
}
