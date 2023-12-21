import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CleanSubscriptionsAndMemoryLeaks} from "../../utils/memory-leak.util";
import {IBookDto} from "../../admin/pages/books/books.interface";
import {urlPathHandler} from "../../utils/urls.util";
import {RouterLink} from "@angular/router";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'com-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class BookCardComponent implements OnInit {
  imgURL = '';
  @Input() book!: IBookDto;

  constructor() {
  }

  ngOnInit() {
    this.imgURL = urlPathHandler('book-images', this.book.images[0] ?? 'no-image.jpg');
  }
}

