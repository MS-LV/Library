import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrService} from "./registr.service";
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss']
})
export class RegistrComponent {
  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    accessKey: new FormControl('', [Validators.required])
  });
  formFields = [
    {placeholder: 'Имя пользователь', icon: 'person', name: 'name', type: 'text', autocomplete: 'username'},
    {placeholder: 'Email', icon: 'mail', name: 'email', type: 'email', autocomplete: 'email'},
    {placeholder: 'Пароль', icon: 'lock', name: 'password', type: 'password', autocomplete: 'current-password'},
    {placeholder: 'Ключ доступа', icon: 'key', name: 'accessKey', type: 'password', autocomplete: 'new-password'},
  ]

  constructor(private service: RegistrService) {
  }

  formSubmit() {
    this.service.authAdmin(this.formGroup.value).subscribe();
  }
}

