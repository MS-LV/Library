import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAsideComponent} from "./admin-aside/admin-aside.component";
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AdminAsideService} from "./admin-aside/admin-aside.service";
import {ApiErrorComponent} from './dialogs/api-error/api-error.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DialogService} from "./dialogs/dialog.service";

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminAsideComponent,
    ApiErrorComponent
  ],
  exports: [
    AdminHeaderComponent,
    AdminAsideComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    MatDialogModule
  ],
  providers: [
    AdminAsideService,
    DialogService
  ]
})
export class AdminSharedModule {
}
