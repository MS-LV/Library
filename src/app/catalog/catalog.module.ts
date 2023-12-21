import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {CatalogComponent} from "./catalog.component";
import {SharedModule} from "../shared/shared.module";
import {BookCardComponent} from "../shared/book-card/book-card.component";
import {FooterComponent} from "../shared/footer/footer.component";
import {HeaderComponent} from "../shared/header/header.component";
import {AuthGuard} from "../shared/guards/auth.guard";
import {CatalogService} from "./catalog.service";


const routes: Routes = [
  {path: '', component: CatalogComponent, canActivate: [AuthGuard]}
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
  ],
  providers: [CatalogService]
})
export class CatalogModule {
}
