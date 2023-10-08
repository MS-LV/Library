import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterLink} from "@angular/router";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
