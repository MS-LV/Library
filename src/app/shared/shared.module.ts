import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfigsService} from "./services/configs.service";
import {AuthGuard} from "./guards/auth.guard";
import {ApiErrorComponent} from './dialogs/api-error/api-error.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DialogService} from "./dialogs/dialog.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ApiErrorComponent
  ],
  exports: [],
  providers: [
    ConfigsService,
    AuthGuard,
    DialogService
  ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
    ]
})
export class SharedModule {
}
