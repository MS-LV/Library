import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../utils/memory-leak.util";
import {IUserDto} from "../admin/pages/admin-users/admin-users.interface";
import {PersonalService} from "./personal.service";
import {Observable} from "rxjs";
import {IBookDto} from "../admin/pages/books/books.interface";
import {ConfigsService} from "../shared/services/configs.service";



@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  @ViewChild('bookSlider', {static: true}) bookSlider!: ElementRef;
  userInfo!: IUserDto;
  slideIndex = 0;
  characterIdx = 0;
  viewIdx = 1;
  booksList$: Observable<IBookDto[]> = new Observable<IBookDto[]>();
  bookSlides = [
    'assets/img/personal/book-card.svg',
    'assets/img/personal/book-card.svg',
    'assets/img/personal/book-card.svg',
    'assets/img/personal/book-card.svg',
    'assets/img/personal/book-card.svg',
  ];
  settingsList = [
    'Списки',
    'Коментарии',
    'Друзья',
    'Сообщения',
    'Игнорь-лист',
    'Уведомления'
  ];
  filterCharacter: Array<{ name: string, much: number }> = [
    {name: 'Все', much: 220},
    {name: 'Читаю', much: 63},
    {name: 'В планах', much: 123},
    {name: 'Брошенно', much: 0},
    {name: 'Прочитано', much: 0},
    {name: 'Любымые', much: 0},
  ];
  filterViews: Array<{ name: string; icon: string }> = [
    {name: 'Список', icon: 'assets/icons/list.svg'},
    {name: 'Плитки', icon: 'assets/icons/tiles.svg'},
  ]

  constructor(private service: PersonalService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem("userInfo") || '';
    this.userInfo = JSON.parse(token);
    this.booksList$ = this.service.getBooks();
  }

  slideBook(i: number) {
    this.slideIndex = i;
    const slideArea = this.bookSlider.nativeElement;
    slideArea.scrollTo({left: slideArea.children[i].offsetLeft, behavior: "smooth"});
  }
}
