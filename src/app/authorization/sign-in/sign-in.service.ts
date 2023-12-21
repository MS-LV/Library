import {Injectable} from '@angular/core';
import {IAuthorization, IRegistrationForm, ISignInForm} from "../registration/registration.interface";
import {Observable, take, tap} from "rxjs";
import {urlPathHandler, UrlsList} from "../../utils/urls.util";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthorizationService} from "../authorization.service";

@Injectable()
export class SignInService {

  constructor(private authorization: AuthorizationService) {
  }

  authUser(user: ISignInForm): Observable<IAuthorization> {
    const url = urlPathHandler(UrlsList.user);
    return this.authorization.authorization(url, user);
  }
}
