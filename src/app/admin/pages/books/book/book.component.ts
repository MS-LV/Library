import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BookService} from "./book.service";
import {IBookDto} from "../books.interface";
import {MatIconModule} from "@angular/material/icon";
import {tap} from "rxjs";


@Component({
    selector: 'comp-book',
    standalone: true,
    imports: [CommonModule, MatIconModule],
    providers: [BookService],
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {
    book!: IBookDto;
    element!: HTMLElement;
    mutationObserver!: MutationObserver;

    constructor(elementRef: ElementRef,
                private service: BookService) {
        this.element = elementRef.nativeElement;
    }

    ngOnInit() {
        this.mutationHandler();
    }

    deleteBook(id: string) {
        const deleteBook = this.service.deleteBook(id)
            .subscribe(() => {
                this.element.remove();
            });
    }

    private init() {
        const id = (this.element.dataset as { identify: string }).identify;
        if (!id) {
            return;
        }
        const book = this.service.getBook(id)
            .pipe(
                tap((book) => {
                    this.book = book;
                })
            )
            .subscribe();
    }

    private mutationHandler() {
        const calcback: MutationCallback = (records, observer) => {
            this.init();
        }
        this.mutationObserver = new MutationObserver(calcback);
        this.mutationObserver.observe(this.element, {attributes: true});
    }
    ngOnDestroy(): void {
        this.mutationObserver.disconnect();
        this.element.removeAttribute('data-identify');
    }
}
