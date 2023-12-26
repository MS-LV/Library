import {Component, OnInit} from '@angular/core';
import {CleanSubscriptionsAndMemoryLeaks} from "../utils/memory-leak.util";


@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {

    document.body.scrollTo({
      // top: 4000
    });
  }

}
