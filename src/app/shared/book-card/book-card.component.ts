import {Component, Input} from '@angular/core';
import {IBookData} from "./book-card.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'com-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BookCardComponent {
  imgURL = `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`;
  @Input() bookData!: IBookData;
}
