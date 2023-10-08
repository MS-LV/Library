import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ConfigsService} from "./services/configs.service";


@NgModule({
  declarations: [],
  exports: [],
  providers: [
    ConfigsService,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
