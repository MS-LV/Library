import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../utils/memory-leak.util";
import {debounceTime, distinctUntilChanged, filter, fromEvent, Observable, tap} from "rxjs";
import {CatalogService} from "./catalog.service";
import {IBookDto} from "../admin/pages/books/books.interface";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @ViewChild('textField', {static: true}) textField!: ElementRef;
  bookList$: Observable<IBookDto[]> = new Observable<IBookDto[]>();

  constructor(private service: CatalogService) {
  }

  ngOnInit(): void {
    this.bookList$ = this.service.getBooks();
    this.textFieldEvents();
  }

  private textFieldEvents() {
    const textField = this.textField.nativeElement;
    const textFieldInput = fromEvent<InputEvent>(textField, 'input');
    const textFieldEnter = fromEvent<KeyboardEvent>(textField, 'keydown');
    textFieldInput.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => {
        console.log('changed: ');
        const textFieldValue = textField.value;
        const query = `?query=${textFieldValue}`;
        this.bookList$ = this.service.getBooks(query);
      })
    ).subscribe();
    textFieldEnter
      .pipe(
        distinctUntilChanged(),
        filter(event => {
          const keyEnter = event.key === 'Enter'
          return keyEnter;
        }),
        tap(() => {
          this.refreshBookList();
        })
      )
      .subscribe()
  }

  private refreshBookList(): void {
    const textField = this.textField.nativeElement;
    const textFieldValue = textField.value;
    const query = `?query=${textFieldValue}`;
    this.bookList$ = this.service.getBooks(query);
  }
}
