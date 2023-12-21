import {Injectable} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {catchError, Observable, of, tap} from 'rxjs';
import {urlPathHandler, UrlsList} from "../../utils/urls.util";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthAdminGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = urlPathHandler(UrlsList.adminVerify);
    return this.http.get<boolean>(url)
      .pipe(
        tap((val) => {
          if (!val) {
            this.router.navigate([[''], {outlets: {authorization: ['login']}}],).then();
          }
        }),
        catchError(() => {
          this.router.navigate([[''], {outlets: {authorization: ['login']}}],).then();
          return of(false)
        })
      )
  }

}
