import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {CatalogComponent} from "./catalog.component";
import {SharedModule} from "../shared/shared.module";
import {BookCardComponent} from "../shared/book-card/book-card.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {HeaderComponent} from "../shared/header/header.component";


const routes: Routes = [
  {path: '', component: CatalogComponent}
]

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
    BookCardComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class CatalogModule {
}
