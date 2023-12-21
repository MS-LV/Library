import {ElementRef, Injectable} from '@angular/core';
import {Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IBookDto} from "../admin/pages/books/books.interface";
import {urlPathHandler, UrlsList} from "../utils/urls.util";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<IBookDto[]> {
    const url = urlPathHandler(UrlsList.book);
    return this.http.get<IBookDto[]>(url).pipe(take(1));
  }

  scrollSlider(inputRange: HTMLInputElement, element: ElementRef, ox = 'x') {
    const slideArea = <HTMLDivElement>element.nativeElement;
    if (ox.toLowerCase() === 'x') {
      const increaseValue = (slideArea.scrollWidth - slideArea.clientWidth) / 100 * +inputRange.value;
      slideArea.scrollTo({left: increaseValue});
    } else {
      const increaseValue = (slideArea.scrollHeight - slideArea.clientHeight) / 100 * +inputRange.value;
      slideArea.scrollTo({top: increaseValue});
    }
  }
}
