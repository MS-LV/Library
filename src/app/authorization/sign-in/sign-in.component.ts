import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SignInService} from "./sign-in.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../registration/registration.component.scss']
})
export class SignInComponent {
  formGroup: FormGroup = new FormGroup<any>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private service: SignInService) {
  }

  formSubmit() {
    this.service.authUser(this.formGroup.value)
      .subscribe(() => {
        this.formGroup.reset();
      })
  }
}
