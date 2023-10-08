import {Component, ElementRef, ViewChild} from '@angular/core';
import {IBookData} from "../shared/book-card/book-card.interface";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  @ViewChild('bookSlider', {static: true}) bookSlider!: ElementRef;
  slideIndex = 0;
  characterIdx = 0;
  viewIdx = 1;
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
    }
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

  constructor() {
  }

  slideBook(i: number) {
    this.slideIndex = i;
    const slideArea = this.bookSlider.nativeElement;
    slideArea.scrollTo({left: slideArea.children[i].offsetLeft, behavior: "smooth"});
  }
}
