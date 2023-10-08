import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {CleanSubscriptionsAndMemoryLeaks} from "../utils/memory-leak";
import {HomeService} from "./home.service";
import {IBookData} from "../shared/book-card/book-card.interface";

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
  timer!: Subscription;
  slideArea!: HTMLDivElement;
  slidePictures!: HTMLDivElement[];
  activeSlide = 0;
  booksData: IBookData[] = [
    {
      name: 'Маг на полную вставку',
      author: 'Chaos',
      country: 'Китай',
      status: 'Закончено',
      chapters: 2100,
      genre: ['Боевик', 'фентези', 'Боевик', 'фентези', 'Боевик', 'фентези'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Лишный в своей же истории ',
      author: 'Jee Gab Song',
      country: 'Южная Корея',
      status: 'Продолжается',
      chapters: 439,
      genre: ['Экшн', 'фентези', 'комедия', 'Экшн', 'фентези', 'комедия'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Второе пришествие обжорства',
      author: 'Ro Yu-jin',
      country: ' Южная Корея',
      status: 'Продолжается',
      chapters: 100,
      genre: ['Фентези', 'романт', 'Фентези', 'романт', 'Фентези', 'романт'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Берсерк обжорства',
      author: 'Ichinoda Ichiri',
      country: 'Япония',
      status: 'Продолжается',
      chapters: 164,
      genre: ['Сенен', 'фентези', 'Сенен', 'фентези', 'Сенен', 'фентези'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Золотое слово мастера',
      author: 'Tomoto Sui',
      country: 'Япония',
      status: 'Переводится',
      chapters: 239,
      genre: ['Сенен', 'фентези', 'Сенен', 'фентези', 'Сенен', 'фентези'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Маг на полную вставку',
      author: 'Chaos',
      country: 'Китай',
      status: 'Закончено',
      chapters: 2100,
      genre: ['Боевик', 'фентези', 'Боевик', 'фентези', 'Боевик', 'фентези'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Лишный в своей же истории ',
      author: 'Jee Gab Song',
      country: 'Южная Корея',
      status: 'Продолжается',
      chapters: 439,
      genre: ['Экшн', 'фентези', 'комедия', 'Экшн', 'фентези', 'комедия'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Второе пришествие обжорства',
      author: 'Ro Yu-jin',
      country: ' Южная Корея',
      status: 'Продолжается',
      chapters: 100,
      genre: ['Фентези', 'романт', 'Фентези', 'романт', 'Фентези', 'романт'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Берсерк обжорства',
      author: 'Ichinoda Ichiri',
      country: 'Япония',
      status: 'Продолжается',
      chapters: 164,
      genre: ['Сенен', 'фентези', 'Сенен', 'фентези', 'Сенен', 'фентези'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Золотое слово мастера',
      author: 'Tomoto Sui',
      country: 'Япония',
      status: 'Переводится',
      chapters: 239,
      genre: ['Сенен', 'фентези', 'Сенен', 'фентези', 'Сенен', 'фентези'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Маг на полную вставку',
      author: 'Chaos',
      country: 'Китай',
      status: 'Закончено',
      chapters: 2100,
      genre: ['Боевик', 'фентези', 'Боевик', 'фентези', 'Боевик', 'фентези'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Лишный в своей же истории ',
      author: 'Jee Gab Song',
      country: 'Южная Корея',
      status: 'Продолжается',
      chapters: 439,
      genre: ['Экшн', 'фентези', 'комедия', 'Экшн', 'фентези', 'комедия'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Второе пришествие обжорства',
      author: 'Ro Yu-jin',
      country: ' Южная Корея',
      status: 'Продолжается',
      chapters: 100,
      genre: ['Фентези', 'романт', 'Фентези', 'романт', 'Фентези', 'романт'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Берсерк обжорства',
      author: 'Ichinoda Ichiri',
      country: 'Япония',
      status: 'Продолжается',
      chapters: 164,
      genre: ['Сенен', 'фентези', 'Сенен', 'фентези', 'Сенен', 'фентези'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
    {
      name: 'Золотое слово мастера',
      author: 'Tomoto Sui',
      country: 'Япония',
      status: 'Переводится',
      chapters: 239,
      genre: ['Сенен', 'фентези', 'Сенен', 'фентези', 'Сенен', 'фентези'],
      imgURL: `assets/img/book-card/background-${Math.ceil(Math.random() * 6)}.svg`,
    },
  ]

  constructor(private service: HomeService) {
  }

  ngOnInit(): void {
    this.prepareSlider();
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
