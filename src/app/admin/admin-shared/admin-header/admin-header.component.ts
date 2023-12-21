import {Component, EventEmitter, Output} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'com-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  openMenu() {
    this.valueChange.emit('menu');
  }
}
