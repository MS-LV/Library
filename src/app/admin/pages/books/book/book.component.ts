import {Component, ElementRef, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BookService} from "./book.service";
import {IBookDto} from "../books.interface";
import {MatIconModule} from "@angular/material/icon";
import {finalize} from "rxjs";

@Component({
  selector: 'comp-book',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  providers: [BookService],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book!: IBookDto;
  element!: HTMLElement;

  constructor(elementRef: ElementRef,
              private service: BookService) {
    this.element = elementRef.nativeElement;
  }

  deleteBook(id: string) {
    const deleteBook = this.service.deleteBook(id)
      .subscribe(() => {
        this.element.remove();
      });
  }
}
