import {Injectable} from '@angular/core';
import {IAdminAuthorization, IAdminRegistrationForm} from "../../interfaces/admin.interface";
import {urlPathHandler, UrlsList} from "../../../utils/urls.util";
import {AdminService} from "../../admin.service";
import {Observable} from "rxjs";

@Injectable()
export class RegistrService {

  constructor(private adminService: AdminService) {
  }

  authAdmin(admin: IAdminRegistrationForm): Observable<IAdminAuthorization> {
    const url = urlPathHandler(UrlsList.adminCreate);
    return this.adminService.authorization(url, admin);
  }
}
