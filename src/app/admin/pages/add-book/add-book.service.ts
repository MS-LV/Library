import {Inject, Injectable} from '@angular/core';
import {catchError, from, Observable, take} from "rxjs";
import {IAdminLocale} from "../../../shared/locale.interface";
import {localePath} from "../../../utils/locale.util";
import {adminFileName} from "../../../shared/shared.contants";
import {HttpClient} from "@angular/common/http";
import {urlPathHandler, UrlsList} from "../../../utils/urls.util";
import {ISuccessResponse} from "../../interfaces/admin.interface";
import {DialogService} from "../../admin-shared/dialogs/dialog.service";
import {
  IBookChapterCharacter,
  IBookGenerateChapter,
  IBookLineCharacter,
  IBookScanCharacter
} from "./add-book.interface";
import {Validators} from "@angular/forms";
import {BOOK_CONFIG_TOKEN, IBookConfigs} from "./configs";

declare const pdfjsLib: any;

@Injectable()
export class AddBookService {
  // form group controllers

  formControllers: any = {
    simpleArea: [
      Validators.required,
      Validators.minLength(this.config.minLengthArea),
      Validators.maxLength(this.config.maxLengthArea)
    ],
    alternativeName: [
      Validators.required,
      Validators.minLength(this.config.minLengthAlternateName),
      Validators.maxLength(this.config.maxLengthAlternateName)
    ],
    imgFiles: [
      Validators.required,
      Validators.minLength(this.config.minLengthPhotos),
      Validators.maxLength(this.config.maxLengthPhotos)
    ],
    descriptionArea: [
      Validators.required,
      Validators.minLength(this.config.minLengthDescriptionArea),
      Validators.maxLength(this.config.maxLengthDescriptionArea)
    ],
    chapterTitle: [
      Validators.required,
      Validators.minLength(this.config.minLengthChapterTitle),
      Validators.maxLength(this.config.maxLengthChapterTitle)
    ]
  }


  pdfBook!: IBookScanCharacter;
  pdfDocument: any;

  constructor(@Inject(BOOK_CONFIG_TOKEN) private config: IBookConfigs,
              private http: HttpClient,
              private dialogService: DialogService) {
  }

  convertBase64(file: File): Observable<string> {
    return new Observable((subscriber) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        subscriber.next(<string>fileReader.result);
      };

      fileReader.onerror = (error) => {
        subscriber.error(error);
      };
    });
  }

  extractPdfText(url: string): Observable<IBookScanCharacter> {
    return from((async () => {
      const pdfBookResult: IBookScanCharacter = {numPages: 0, pages: []};
      this.pdfDocument = await pdfjsLib.getDocument({url}).promise;
      pdfBookResult.numPages = this.pdfDocument.numPages;
      for (let i = 1; i < pdfBookResult.numPages; i++) {
        const page = await this.pdfDocument.getPage(i);
        const content = await page.getTextContent();
        const items = <IBookLineCharacter[]>content.items;
        const lines = this.preparePdfObject(items);
        pdfBookResult.pages.push(lines);
      }
      this.pdfBook = pdfBookResult;
      return pdfBookResult;
    })()).pipe(take(1));
  }

  getLocale(): Observable<IAdminLocale> {
    const url = localePath(adminFileName);
    return this.http.get<IAdminLocale>(url).pipe(take(1));
  }

  sendBook(newBookData: FormData): Observable<ISuccessResponse> {
    const url = urlPathHandler(UrlsList.book);
    return this.http.post<ISuccessResponse>(url, newBookData)
      .pipe(
        take(1),
        catchError((err) => {
          console.log('error: ', err);
          return this.dialogService.openApiDialog(err);
        })
      );
  }

  createChapter(generateChapter: IBookGenerateChapter): IBookChapterCharacter {
    const {startPage, endPage, title} = generateChapter;
    const content: IBookLineCharacter[][] = this.pdfBook.pages.slice(startPage - 1, endPage - 1);
    return {startPage, endPage, title, content};
  }

  clear() {
    this.pdfDocument = null;
    this.pdfBook = {numPages: 1, pages: []};
  }

  private preparePdfObject(pdf: IBookLineCharacter[]): IBookLineCharacter[] {
    return pdf.map(({dir, str}) => ({dir, str})).filter(({str}) => str.trim());
  }
}
