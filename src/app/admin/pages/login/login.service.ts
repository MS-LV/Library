import {Injectable} from '@angular/core';
import {AdminService} from "../../admin.service";
import {IAdminAuthorization, IAdminRegistrationForm, IAdminSignInForm} from "../../interfaces/admin.interface";
import {Observable} from "rxjs";
import {urlPathHandler, UrlsList} from "../../../utils/urls.util";

@Injectable()
export class LoginService {

  constructor(private adminService: AdminService) {
  }

  authAdmin(admin: IAdminSignInForm): Observable<IAdminAuthorization> {
    const url = urlPathHandler(UrlsList.admin);
    return this.adminService.authorization(url, admin);
  }
}
