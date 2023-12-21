import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CleanSubscriptionsAndMemoryLeaks} from "../utils/memory-leak.util";
import {BookService} from "./book.service";
import {Observable} from "rxjs";
import {IBookDto} from "../admin/pages/books/books.interface";
import {urlPathHandler} from "../utils/urls.util";



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
