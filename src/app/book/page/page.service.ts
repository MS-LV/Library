import {Injectable} from '@angular/core';
import {Observable, Subject, take, tap} from "rxjs";
import {IBookChapterCharacter} from "../../admin/pages/add-book/add-book.interface";
import {urlPathHandler, UrlsList} from "../../utils/urls.util";
import {HttpClient} from "@angular/common/http";
import {IBookDto} from "../../admin/pages/books/books.interface";
import {IChapterDto} from "./page.interface";

@Injectable({
  providedIn: 'root'
})
export class PageService {
  chapterListener$: Subject<IChapterDto> = new Subject<IChapterDto>();

  constructor(private http: HttpClient) {
  }

  getChapter(chapterNumber: string): Observable<IChapterDto> {
    const url = urlPathHandler(UrlsList.book, chapterNumber);
    return this.http.get<IChapterDto>(url)
      .pipe(
        take(1),
        tap((chapter: IChapterDto) => {
          this.chapterListener$.next(chapter);
        })
      );
  }
}
