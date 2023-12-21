import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CleanSubscriptionsAndMemoryLeaks} from "../../utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'com-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PaginationComponent {

  protected readonly Array = Array;
  activePagination = 0;
}
