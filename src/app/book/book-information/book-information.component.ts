import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {IBookDto} from "../../admin/pages/books/books.interface";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {urlPathHandler} from "../../utils/urls.util";
import {BookInformationService} from "./book-information.service";
import {PaginationComponent} from "../../shared/pagination/pagination.component";
import {BookService} from "../book.service";
type bookChapter = { title: string, id: number }
@Component({
  selector: 'comp-book-information',
  standalone: true,
  imports: [CommonModule, PaginationComponent, RouterLink],
  templateUrl: './book-information.component.html',
  styleUrls: ['./book-information.component.scss']
})
export class BookInformationComponent implements OnInit {
  @ViewChild('bookSlider') bookSlider!: ElementRef;
  activeCard = 0;
  bookID = '';
  book$: Observable<IBookDto> = new Observable<IBookDto>();
  sourceURL = urlPathHandler('book-images/');
  bookChapters: bookChapter[] | undefined;

  constructor(private route: ActivatedRoute,
              private service: BookInformationService) {
  }

  ngOnInit(): void {
    this.bookID = <string>this.route.snapshot.paramMap.get('id');
    this.book$ = this.service.getBook(this.bookID);
  }

  slideBook(i: number) {
    const slideArea = this.bookSlider.nativeElement;
    const currentChildOffset = slideArea.children[i].offsetLeft;
    slideArea.scrollTo({
      left: currentChildOffset,
      behavior: "smooth"
    });
    this.activeCard = i;
  }
  searchChapter(input: HTMLInputElement, book: bookChapter[]) {
    const inputValue = input.value.toLowerCase().trim();
    if (!inputValue) {
      this.bookChapters = undefined;
      return;
    }
    const matchingChapters = book.filter((chapter) => {
      const chapterTitle = chapter.title.toLowerCase();
      return chapterTitle.includes(inputValue);
    });
    this.bookChapters = matchingChapters;
  }
}
