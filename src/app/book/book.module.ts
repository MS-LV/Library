import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {FooterComponent} from "../shared/footer/footer.component";
import {HeaderComponent} from "../shared/header/header.component";
import {PaginationComponent} from "../shared/pagination/pagination.component";
import {AuthGuard} from "../shared/guards/auth.guard";
import {BookService} from "./book.service";


const routes: Routes = [
  {
    path: '', component: BookComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./book-information/book-information.component').then(m => m.BookInformationComponent)
      },
      {
        path: ':chapter',
        loadComponent: () => import('./page/page.component').then(m => m.PageComponent)
      }
    ]
  },
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
  ],
  providers: [BookService]
})
export class BookModule {
}
