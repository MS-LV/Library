import {Injectable} from '@angular/core';
import {IAuthorization, IRegistrationForm} from "./registration.interface";
import {Observable} from "rxjs";
import {urlPathHandler, UrlsList} from "../../utils/urls.util";
import {AuthorizationService} from "../authorization.service";

@Injectable()
export class RegistrationService {

  constructor(private authorization: AuthorizationService) {
  }

  authUser(user: IRegistrationForm): Observable<IAuthorization> {
    const url = urlPathHandler(UrlsList.userCreate);
    return this.authorization.authorization(url, user);
  }
}
