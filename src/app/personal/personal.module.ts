import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonalComponent} from './personal.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import {BookCardComponent} from "../shared/book-card/book-card.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {HeaderComponent} from "../shared/header/header.component";
import {PaginationComponent} from "../shared/pagination/pagination.component";


const routes: Routes = [
  {
    path: '', component: PersonalComponent
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
  ]
})
export class PersonalModule {
}
