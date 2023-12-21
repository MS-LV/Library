import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookInformationService} from "../book-information/book-information.service";
import {PageService} from "./page.service";
import {Router, RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import {CleanSubscriptionsAndMemoryLeaks} from "../../utils/memory-leak.util";
import {IBookDto} from "../../admin/pages/books/books.interface";
import {IChapterDto} from "./page.interface";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'comp-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  chapter!: IChapterDto;
  chapterListener!: Subscription;
  chapterNumber = 0;
  bookID = '';
  book!: IBookDto;

  constructor(public bookInfoService: BookInformationService,
              private service: PageService,
              private router: Router) {
  }

  ngOnInit(): void {
    const path = this.router.url;
    const url = path.split('/').slice(-2).join('/');
    this.bookID = path.split('/').slice(-2, -1).join('');
    ;
    this.chapterNumber = +path.split('/').slice(-1).join('');
    this.bookInfoService.getBook(this.bookID).subscribe();
    this.chapterListener = this.service.chapterListener$
      .subscribe((chapter: IChapterDto) => {
        this.chapter = chapter;
        console.log('book: ', this.bookInfoService)
      });

    this.service.getChapter(url).subscribe((chapter) => {
      console.log('chapter: ', chapter);
    });
  }

  changeChapter(isNext: boolean) {
    const direction = isNext ? ++this.chapterNumber : --this.chapterNumber;
    this.router.navigate(['catalog', this.bookID, direction])
      .then(() => {
        this.ngOnInit();
      })
  }
}
