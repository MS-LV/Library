import {Injectable} from '@angular/core';
import {IAuthorization, IRegistrationForm, ISignInForm} from "./registration/registration.interface";
import {catchError, filter, Observable, of, take, tap} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {UrlsList} from "../utils/urls.util";
import {DialogService} from "../shared/dialogs/dialog.service";

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient,
              private router: Router,
              private dialogService: DialogService) {
  }

  authorization(url: string, user: IRegistrationForm | ISignInForm): Observable<IAuthorization> {
    return this.http.post<IAuthorization>(url, user)
      .pipe(
        take(1),
        catchError((err: HttpErrorResponse) => {
          return this.dialogService.openApiDialog(err)
        }),
        tap((value: IAuthorization) => {
          if (!value) {
            return;
          }
          localStorage.setItem('token', value.token);
          localStorage.setItem('userInfo', JSON.stringify(value.userInfo));
          this.router.navigate([UrlsList.redirectTo]).then();
        }));
  }
}
