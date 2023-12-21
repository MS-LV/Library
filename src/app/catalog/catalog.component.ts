import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../utils/memory-leak.util";
import {debounceTime, filter, fromEvent, Observable, tap} from "rxjs";
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
  filter = {
    genres: ['экшен', 'фэнтези', 'комедия', 'романтика', 'гарем', 'игра'],
    authors: ['Chaos', 'Jee Gab Songs', 'Ro Yu-jin', 'Ichinoda Ichiri', 'Tomo Sui', 'Park Sanel', 'Mon ji Hyon', 'Fan Bone', 'Shirakome Ryo'],
    tags: ['Авантюристы', 'Гриндинг', 'Хитрый ГГ', 'Полулюди', 'Демоны', 'Эмоционально глуповатый ГГ', 'Драконы', 'Мастер подземелий'],
    collections: [],
    ages: [18, 16, 'отсутствует'],
    countries: ['япония', 'Китай', 'Корея', 'Росия', 'Англия'],
    type: ['лайт', 'веб'],
    isTranslate: ['Переводится', 'Завершен', 'Заморожен', 'Заброшен'],
    statusBook: ['продолжаеться', 'завершен', 'анонос', 'приостановлен', 'прекращен'],
    events: ['читаю', 'в планах', 'брошено', 'прочитано', 'любымие']
  }
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
      filter(() => {
        return textField.value.trim();
      }),
      tap(() => {
        const textFieldValue = textField.value;
        const query = `?query=${textFieldValue}`;
        this.bookList$ = this.service.getBooks(query);
      })
    ).subscribe();
    textFieldEnter
      .pipe(
        filter(event => {
          const keyEnter = event.key === 'Enter'
          const textFieldValue = textField.value.trim();
          // return keyEnter && textFieldValue;
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
