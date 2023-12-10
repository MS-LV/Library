import {Component} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../../utils/memory-leak.util";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "./registration.service";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private service: RegistrationService) {
  }

  formGroup: FormGroup = new FormGroup<any>({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(16)])
  });

  formSubmit() {
    const formValue = this.formGroup.value;
    this.service.authUser(formValue)
      .subscribe((next) => {
        this.formGroup.reset()
      });
  }

}
