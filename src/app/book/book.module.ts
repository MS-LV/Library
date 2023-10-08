import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FooterComponent} from "../shared/footer/footer.component";
import {HeaderComponent} from "../shared/header/header.component";
import {PaginationComponent} from "../shared/pagination/pagination.component";


const routes: Routes = [
  {path: '', component: BookComponent}
]

@NgModule({
  declarations: [
    BookComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FooterComponent,
    HeaderComponent,
    PaginationComponent
  ]
})
export class BookModule {
}
