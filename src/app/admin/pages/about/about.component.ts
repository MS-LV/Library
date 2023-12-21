import {Component} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

}
