import {Component} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "./utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Library';
}
