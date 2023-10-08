import { Component } from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../../utils/memory-leak";
@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

}
