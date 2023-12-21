import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {IUserDto} from "./admin-users.interface";
import {urlPathHandler, UrlsList} from "../../../utils/urls.util";

@Injectable()
export class AdminUsersService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<IUserDto[]> {
    const url = urlPathHandler(UrlsList.user);
    return this.http.get<IUserDto[]>(url).pipe(take(1));
  }
}
