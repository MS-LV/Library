import { Component } from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../utils/memory-leak.util";
@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent {

}
