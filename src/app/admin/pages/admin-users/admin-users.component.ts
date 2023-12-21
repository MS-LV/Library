import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from "./user/user.component";
import {AdminUsersService} from "./admin-users.service";
import {Observable} from "rxjs";
import {IUserDto} from "./admin-users.interface";
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";
import {MatIconModule} from "@angular/material/icon";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'comp-admin-users',
  standalone: true,
  imports: [CommonModule, UserComponent, MatIconModule],
  providers: [AdminUsersService],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  usersList$ = new Observable<IUserDto[]>();

  constructor(private service: AdminUsersService) {
  }

  ngOnInit(): void {
    this.usersList$ = this.service.getAllUsers();
  }
}
