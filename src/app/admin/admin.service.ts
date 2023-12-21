import {Injectable} from '@angular/core';
import {catchError, Observable, of, take, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IAdminAuthorization, IAdminRegistrationForm, IAdminSignInForm} from "./interfaces/admin.interface";
import {urlPathHandler, UrlsList} from "../utils/urls.util";
import {Router} from "@angular/router";
import {DialogService} from "./admin-shared/dialogs/dialog.service";

@Injectable()
export class AdminService {
  constructor(private http: HttpClient,
              private router: Router,
              private dialogService: DialogService) {
  }

  authorization(url: string, admin: IAdminRegistrationForm | IAdminSignInForm): Observable<IAdminAuthorization> {
    return this.http.post<IAdminAuthorization>(url, admin)
      .pipe(
        take(1),
        catchError((err) => {
          return this.dialogService.openApiDialog(err);
        }),
        tap((value) => {
          if (!value) {
            return;
          }
          localStorage.setItem('token', value.token);
          localStorage.setItem('adminInfo', JSON.stringify(value.adminInfo));
          // this.router.navigate()
          this.router.navigate([UrlsList.adminRedirectTo]).then();
        })
      )
  }

  verifyAdmin(): Observable<boolean> {
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
