import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AdminAsideComponent} from "./admin-shared/admin-aside/admin-aside.component";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {AdminSharedModule} from "./admin-shared/admin-shared.module";
import {urlPathHandler, UrlsList} from "../utils/urls.util";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AdminService} from "./admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, AdminSharedModule, RouterOutlet]
})
export class AdminComponent implements OnInit {
  isOpenMenu = false;
  isMaxWidth = false;

  constructor(private service: AdminService) {
  }

  ngOnInit() {
    this.service.verifyAdmin().subscribe();
  }

  headerChange(evt: any) {
    if (evt === 'menu') {
      this.isOpenMenu = !this.isOpenMenu;
    }
  }

  asideChange(evt: any) {
    if (evt === 'max-width') {
      this.isMaxWidth = !this.isMaxWidth;
    }
  }
}
