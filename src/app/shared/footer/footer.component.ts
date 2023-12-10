import {Component} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../../utils/memory-leak.util";
import {Observable} from "rxjs";
import {FooterService} from "./footer.service";
import {CommonModule} from "@angular/common";
import {IFooterLocale} from "../locale.interface";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'com-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [FooterService]
})
export class FooterComponent {
  locale!: Observable<IFooterLocale>;

  constructor(private service: FooterService) {
    this.init();
  }

  pageUp() {
    document.body.scrollTo({top: 0, behavior: "smooth"});
  }

  private init() {
    this.locale = this.service.getLocale();
  }
}
