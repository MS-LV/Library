import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {BookCardComponent} from "../shared/book-card/book-card.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {HeaderComponent} from "../shared/header/header.component";
import {AuthGuard} from "../shared/guards/auth.guard";


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    BookCardComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class HomeModule {
}
