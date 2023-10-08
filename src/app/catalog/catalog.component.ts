import {Component} from '@angular/core';
import {IBookData} from "../shared/book-card/book-card.interface";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  filter = {
    genres: ['экшен', 'фэнтези', 'комедия', 'романтика', 'гарем', 'игра'],
    authors: ['Chaos', 'Jee Gab Songs', 'Ro Yu-jin', 'Ichinoda Ichiri', 'Tomo Sui', 'Park Sanel', 'Mon ji Hyon', 'Fan Bone', 'Shirakome Ryo'],
    tags: ['Авантюристы', 'Гриндинг', 'Хитрый ГГ', 'Полулюди', 'Демоны', 'Эмоционально глуповатый ГГ', 'Драконы', 'Мастер подземелий'],
    collections: [],
    ages: [18, 16, 'отсутствует'],
    countries: ['япония', 'Китай', 'Корея', 'Росия', 'Англия'],
    type: ['лайт', 'веб'],
    isTranslate: ['Переводится', 'Завершен', 'Заморожен', 'Заброшен'],
    statusBook: ['продолжаеться', 'завершен', 'анонос', 'приостановлен', 'прекращен'],
    events: ['читаю', 'в планах', 'брошено', 'прочитано', 'любымие']
  }

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
  ]

}
