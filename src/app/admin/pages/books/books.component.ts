import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";
import {BooksService} from "./books.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBookDto} from "./books.interface";
import {BookComponent} from "./book/book.component";
import {MatIconModule} from "@angular/material/icon";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, BookComponent, MatIconModule],
  providers: [BooksService],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  bookList$: Observable<IBookDto[]> = new Observable<IBookDto[]>();

  constructor(private service: BooksService) {
  }

  ngOnInit(): void {
    this.bookList$ = this.service.getAllBooks();
  }
}
