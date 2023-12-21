import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-api-error',
  templateUrl: './api-error.component.html',
  styleUrls: ['./api-error.component.scss']
})
export class ApiErrorComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public response: HttpErrorResponse) {
  }
}
