import { Component } from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "./utils/memory-leak";
@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Library';
}
