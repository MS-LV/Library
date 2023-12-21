import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterLink} from "@angular/router";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminInterceptor} from "./admin/interceptors/admin.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AdminInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
