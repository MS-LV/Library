import { Injectable } from '@angular/core';
import {IAdminPage} from "../admin-shared.interface";

@Injectable()
export class AdminAsideService {

  constructor() { }
  adminPages: IAdminPage[] = [
    {title: 'Добавить', icon: 'add', url: '/admin/add-book'},
    {title: 'Пользователы', icon: 'group', url: '/admin/users'},
    {title: 'Книги', icon: 'library_books', url: '/admin/books'},
  ]
}
