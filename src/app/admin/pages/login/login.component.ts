import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });
  formFields = [
    {placeholder: 'Email', icon: 'mail', name: 'email', autocomplete: 'email'},
    {placeholder: 'Пароль', icon: 'lock', name: 'password', autocomplete: 'current-password'},
  ];

  constructor(private service: LoginService) {
  }

  formSubmit() {
    this.service.authAdmin(this.formGroup.value).subscribe();
  }
}
