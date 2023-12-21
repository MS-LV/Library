import {Component, ElementRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IUserDto} from "../admin-users.interface";
import {CleanSubscriptionsAndMemoryLeaks} from "../../../../utils/memory-leak.util";
import {UserService} from "./user.service";
import {MatIconModule} from "@angular/material/icon";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'comp-user',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: IUserDto;
  element!: HTMLElement;

  constructor(elementRef: ElementRef,
              private service: UserService) {
    this.element = elementRef.nativeElement;
  }

  deleteUser(id: string) {
    const observable = this.service.deleteUser(id)
      .subscribe(() => {
        this.element.remove();
      });
  }
}
