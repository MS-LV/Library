import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {urlPathHandler, UrlsList} from "../../utils/urls.util";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = urlPathHandler(UrlsList.userVerify);
    return this.http.get<boolean>(url)
      .pipe(tap((value) => {
        if (!value) {
          this.router.navigate([UrlsList.authTo]).then();
        }
      }));
  }

}
