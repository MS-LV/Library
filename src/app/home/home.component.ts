import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {interval, Observable, Subscription, tap} from "rxjs";
import {CleanSubscriptionsAndMemoryLeaks} from "../utils/memory-leak.util";
import {HomeService} from "./home.service";
import {IBookDto} from "../admin/pages/books/books.interface";
import {urlPathHandler} from "../utils/urls.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('slidesPictures', {static: true}) private _slideArea!: ElementRef<HTMLDivElement>;
  @ViewChild('hotSlider') private hotSlider!: ElementRef;
  @ViewChild('sectionSlider') sectionSlide!: ElementRef;
  activeSlide = 0;
  booksList$: Observable<IBookDto[]> = new Observable<IBookDto[]>();
  slideArea!: HTMLDivElement;
  slidePictures!: HTMLDivElement[];
  timer!: Subscription;
  randomBook!: IBookDto;
  imgURL = '';

  constructor(private service: HomeService) {
  }

  ngOnInit(): void {
    this.prepareSlider();
    this.booksList$ = this.service.getBooks()
      .pipe(tap((books) => {
        const random = Math.floor(Math.random() * books.length);
        this.randomBook = books[random];
        this.imgURL = urlPathHandler('book-images',  this.randomBook.images[0] ?? 'no-image.jpg')
      }))
    document.body.scrollTo({
      // top: 4500
    })
  }

  sliding(idx: number) {
    this.activeSlide = idx;
    this.slideArea.scrollTo({left: this.slidePictures[idx].offsetLeft, behavior: "smooth"});
  }

  hotProgress(event: Event) {
    const inputRange = <HTMLInputElement>event.target;
    this.service.scrollSlider(inputRange, this.hotSlider);
  }

  sectionProgress(event: Event) {
    const inputRange = <HTMLInputElement>event.target;
    this.service.scrollSlider(inputRange, this.sectionSlide, 'y');
  }

  private prepareSlider() {
    this.slideArea = this._slideArea.nativeElement;
    this.slidePictures = Array.from(this.slideArea.querySelectorAll('.slide-item'));
    this.timer = interval(5000)
      .subscribe((i) => {
        this.activeSlide++;
        const idx = this.activeSlide % this.slidePictures.length;
        this.sliding(idx);
      });
  }
}
