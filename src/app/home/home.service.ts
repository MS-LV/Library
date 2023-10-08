import {ElementRef, Injectable} from '@angular/core';
import {interval} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
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
