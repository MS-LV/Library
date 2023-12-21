import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonalComponent} from './personal.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {BookCardComponent} from "../shared/book-card/book-card.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {HeaderComponent} from "../shared/header/header.component";
import {PaginationComponent} from "../shared/pagination/pagination.component";
import {AuthGuard} from "../shared/guards/auth.guard";
import {PersonalService} from "./personal.service";


const routes: Routes = [
  {
    path: '', component: PersonalComponent, canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    BookCardComponent,
    FooterComponent,
    HeaderComponent,
    PaginationComponent
  ],
  providers: [PersonalService]
})
export class PersonalModule {
}
