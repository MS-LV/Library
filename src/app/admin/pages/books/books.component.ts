import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";
import {BooksService} from "./books.service";
import {delay, tap, window} from "rxjs";
import {IBookLazy} from "./books.interface";
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
    @ViewChildren('book') books!: QueryList<BookComponent>
    bookList!: IBookLazy[];

    constructor(private service: BooksService) {
    }

    ngOnInit(): void {
        this.service.getAllBooks()
            .pipe(
                tap((books) => {
                    this.bookList = books
                }),
                delay(2000),
                tap(() => {
                    this.intersectionHandler();
                })
            )
            .subscribe();
    }

    private intersectionHandler() {
        const bookComponents = this.books['_results'];
        const books = bookComponents.map((book: BookComponent) => book.element);
        const options: IntersectionObserverInit = {
            rootMargin: '5px',
            root: null,
            threshold: 0.5
        }
        const callback: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }
                const target = entry.target;
                target.setAttribute('data-identify', target.id);
                observer.unobserve(target);
                // observer.unobserve(entry.target);
            })
        }
        const observer = new IntersectionObserver(callback, options);
        books.forEach((book: HTMLElement) => observer.observe(book));
    }
}
