import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterOutlet} from "@angular/router";
import {AdminSharedModule} from "./admin-shared/admin-shared.module";
import {AdminService} from "./admin.service";
import {CleanSubscriptionsAndMemoryLeaks} from "../utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
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
