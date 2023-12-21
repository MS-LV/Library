import {Component, EventEmitter, Output} from '@angular/core';
import {AdminAsideService} from "./admin-aside.service";
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'com-admin-aside',
  templateUrl: './admin-aside.component.html',
  styleUrls: ['./admin-aside.component.scss']
})
export class AdminAsideComponent {
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(public service: AdminAsideService) {
  }

  maxSizeContent() {
    this.valueChange.emit('max-width');
  }
}
