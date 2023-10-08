import {NgModule} from '@angular/core';
import {AdminComponent} from './admin.component';
import {RouterModule, Routes} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path: '', component: AdminComponent}
]

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule {
}
