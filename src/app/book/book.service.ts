import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, take} from "rxjs";
import {IBookDto} from "../admin/pages/books/books.interface";
import {urlPathHandler, UrlsList} from "../utils/urls.util";

@Injectable()
export class BookService {
}
