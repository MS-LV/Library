import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationComponent} from "./authorization.component";
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {
    // Дополнительный маршрут для перенаправления
    path: '',
    redirectTo: 'registration',
    pathMatch: "full"
  },
  {
    path: '',
    component: AuthorizationComponent,
    children: [
      {path: 'registration', component: RegistrationComponent},
      {path: 'sign-in', component: SignInComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AuthorizationComponent,
    RegistrationComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthorizationModule {
}
