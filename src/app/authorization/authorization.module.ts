import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationComponent} from "./authorization.component";
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from './registration/registration.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationService} from "./registration/registration.service";
import {SharedModule} from "../shared/shared.module";
import {AuthorizationService} from "./authorization.service";
import {SignInService} from "./sign-in/sign-in.service";


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
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [
        RegistrationService,
        SignInService,
        AuthorizationService
    ]
})
export class AuthorizationModule {
}
