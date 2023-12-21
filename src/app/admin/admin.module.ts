import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {AdminSharedModule} from "./admin-shared/admin-shared.module";
import {RegistrComponent} from "./pages/registr/registr.component";
import {LoginComponent} from './pages/login/login.component';
import {RegistrService} from "./pages/registr/registr.service";
import {AdminService} from "./admin.service";
import {AuthAdminGuard} from "./guards/auth-admin.guard";
import {LoginService} from "./pages/login/login.service";
import {AboutComponent} from './pages/about/about.component';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin.component').then(m => m.AdminComponent),
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: 'add-book',
        canActivate: [AuthAdminGuard],
        loadComponent: () => import('./pages/add-book/add-book.component').then(m => m.AddBookComponent)
      },
      {
        path: 'books',
        canActivate: [AuthAdminGuard],
        loadComponent: () => import('./pages/books/books.component').then(m => m.BooksComponent)
      },
      {
        path: 'users',
        canActivate: [AuthAdminGuard],
        loadComponent: () => import('./pages/admin-users/admin-users.component').then(m => m.AdminUsersComponent)
      },
      {
        path: 'registration',
        component: RegistrComponent,
        outlet: 'authorization'
      },
      {
        path: 'login',
        component: LoginComponent,
        outlet: 'authorization'
      }
    ]
  },
]

@NgModule({
  declarations: [
    RegistrComponent,
    LoginComponent,
    AboutComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdminSharedModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    AdminService,
    RegistrService,
    AuthAdminGuard,
    LoginService,
  ]
})
export class AdminModule {
}
