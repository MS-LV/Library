import {Component} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../../utils/memory-leak";
import {ConfigsService} from "../services/configs.service";
import {IHeaderLocale} from "./header.interface";
import {Observable} from "rxjs";
import {HeaderService} from "./header.service";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'com-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [HeaderService]
})
export class HeaderComponent {
  isAuthorized = false;
  locale!: Observable<IHeaderLocale>;

  constructor(private configs: ConfigsService,
              private service: HeaderService) {
    this.init();
  }

  private init(): void {
    this.locale = this.service.getLocale();
  }
}
