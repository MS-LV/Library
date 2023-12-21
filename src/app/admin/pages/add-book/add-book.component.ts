import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AngularEditorConfig, AngularEditorModule} from "@kolkov/angular-editor";
import {AddBookService} from "./add-book.service";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {Observable, tap} from "rxjs";
import {IAdminLocale} from "../../../shared/locale.interface";
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {IBookChapterCharacter, IBookGenerateChapter} from "./add-book.interface";
import {BOOK_CONFIG, BOOK_CONFIG_TOKEN, IBookConfigs} from "./configs";
import {CleanSubscriptionsAndMemoryLeaks} from "../../../utils/memory-leak.util";

@CleanSubscriptionsAndMemoryLeaks()
@Component({
  selector: 'app-add-book',
  standalone: true,
  styleUrls: ['./add-book.component.scss'],
  templateUrl: './add-book.component.html',
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularEditorModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AddBookService,
    {provide: BOOK_CONFIG_TOKEN, useValue: BOOK_CONFIG},
  ]
})
export class AddBookComponent implements OnInit, OnDestroy {
  uploadImages: string[] = [];
  selectedImages: File[] = [];
  htmlContent = '';
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'now',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    rawPaste: true,
    toolbarHiddenButtons: [
      [
        'backgroundColor',
        'toggleEditorMode',
        'insertHorizontalRule',
        'removeFormat',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'unlink',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'textColor',
        'insertVideo',
        'insertImage'
      ]
    ]
  }
  formGroup: FormGroup = new FormGroup<any>({
    author: new FormControl('', this.service.formControllers.simpleArea),
    alternate_name: new FormControl('', this.service.formControllers.alternativeName),
    bookGenres: new FormControl([], [Validators.required]),
    bookTags: new FormControl([], [Validators.required]),
    bookName: new FormControl('', this.service.formControllers.simpleArea),
    descriptionText: new FormControl('', this.service.formControllers.descriptionArea),
    country: new FormControl('', this.service.formControllers.simpleArea),
    imgFiles: new FormControl([''], this.service.formControllers.imgFiles),
    released: new FormControl('', [Validators.required]),
    type: new FormControl('', this.service.formControllers.simpleArea),
    status: new FormControl('', this.service.formControllers.simpleArea),
    translating: new FormControl('', this.service.formControllers.simpleArea),
    //chapter fields
    title: new FormControl(''),
    endPage: new FormControl(2)
  });

  chapterTitle: FormControl = new FormControl('', this.service.formControllers.chapterTitle);
  chapterEndPage: FormControl = new FormControl('')
  locale!: Observable<IAdminLocale>;
  newBookData: FormData = new FormData();
  bookChapters: IBookChapterCharacter[] = [];

  // chips
  separatorKeysCodes: number[] = [ENTER, COMMA];
  bookGenres: string[] = [];
  bookTags: string[] = [];

  //flags
  onLoad = false;
  maxPage = 1;
  fileChose = false;

  generateChapter: IBookGenerateChapter = {startPage: 1, endPage: 2, title: ''};

  constructor(
    @Inject(BOOK_CONFIG_TOKEN) public config: IBookConfigs,
    private service: AddBookService) {
    this.locale = this.service.getLocale();
  }

  ngOnInit() {
  }

  readPdfFile() {
    const file = <File>this.newBookData.get('file');
    const fr = new FileReader();
    if (!file?.type?.includes('application/pdf')) {
      return;
    }
    this.onLoad = true
    fr.readAsDataURL(file);
    fr.onload = () => {
      const res = <string>fr.result;
      this.service.extractPdfText(res)
        .subscribe((value) => {
          this.maxPage = value.numPages;
          this.onLoad = false;
          this.fileChose = true;
        });
    }
  }

  onBookFormSubmit(): void {
    this.noNameChapter();
    this.setFormValues();
    console.log('chapter', this.bookChapters);
    this.service.sendBook(this.newBookData)
      .pipe(
        tap(() => {
          this.resetForm();
        }),
      ).subscribe(null, null, () => {
      this.fileChose = false;
      this.newBookData = new FormData();
    });
  }

  onResetForm() {
    this.uploadImages.length = 0;
    this.resetChapterPosition();
    this.resetForm();
  }

  onProcessImages(imageInput: HTMLInputElement): void {
    const files = Array.from(<FileList>imageInput.files);
    files.forEach((file: File) => {
      this.newBookData.append('img-' + file.name, file);
      if (this.uploadImages.length >= this.config.maxLengthPhotos) {
        this.uploadImages.shift();
      }
      this.selectedImages.push(file);
      this.service.convertBase64(file)
        .subscribe((img) => {
          this.uploadImages.push(img);
        });
    });
    this.formGroup.get('imgFiles')?.setValue(this.selectedImages);
  }

  onProcessFile(fileInput: HTMLInputElement) {
    this.newBookData.delete('file');
    const files = Array.from(<FileList>fileInput.files);
    files.forEach((file: File) => {
      this.newBookData.append('file', file);
    });
    fileInput.value = '';
    this.resetChapterPosition();
    this.readPdfFile();
  }

  onPasteDescription(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    this.formGroup.get('descriptionText')?.setValue(pastedText);
  }

  // chips
  onAddChips(event: MatChipInputEvent, genres: string[], source: string[]): void {
    const value = (event.value || '').trim();
    if (!value || source.includes(value) || !genres.includes(value)) {
      return;
    }
    source.push(value);
    event.chipInput!.clear();
  }

  onRemoveChips(fruit: string, source: string[]): void {
    const index = source.indexOf(fruit);
    if (index >= 0) {
      source.splice(index, 1);
    }
  }

  onSelected(event: MatAutocompleteSelectedEvent, input: HTMLInputElement, fruits: string[]): void {
    fruits.push(event.option.viewValue);
    input.value = '';
  }

  // chapter
  addChapter() {
    const title = this.chapterTitle;
    const endPage = this.chapterEndPage;
    const isValidChapter = title?.valid && endPage?.valid;
    if (!isValidChapter) {
      return;
    }
    const generateChapter = this.service.createChapter(this.generateChapter);
    this.bookChapters.push(generateChapter);
    this.generateChapter.startPage = this.generateChapter.endPage;
    this.generateChapter.endPage += 1;
    this.cleanFormControls([title]);
  }

  isValidChapter(): boolean {
    const title = this.chapterTitle.invalid;
    const endPage = this.chapterEndPage.invalid;
    return title || endPage;
  }

  ngOnDestroy(): void {
    this.service.clear();
    this.onResetForm();
  }

  private setFormValues() {
    const form = this.formGroup
    const genres = new Set(this.bookGenres);
    const tags = new Set(this.bookTags);
    const files = new Set(this.selectedImages);
    form.get('bookGenres')!.setValue(Array.from(genres));
    form.get('bookTags')!.setValue(Array.from(tags));
    const formValue = form.value;
    for (const key in formValue) {
      const value = formValue[key];
      this.newBookData.append(key, value);
    }
    this.newBookData.append('book', JSON.stringify(this.bookChapters));
  }

  private resetForm() {
    this.formGroup.reset();
    this.newBookData = new FormData();
    this.selectedImages = [];
    this.uploadImages = [];
    this.bookGenres = [];
    this.bookTags = [];
    this.bookChapters = [];
    this.resetChapterPosition();
  }

  private resetChapterPosition() {
    this.generateChapter = {startPage: 1, endPage: 2, title: ''}
  }

  private noNameChapter() {
    const lastChapter = this.generateChapter;
    if (lastChapter.startPage >= this.maxPage) {
      return;
    }
    this.generateChapter.endPage = this.maxPage;
    this.generateChapter.title = 'Без названия'
    const generateChapter = this.service.createChapter(this.generateChapter);
    this.bookChapters.push(generateChapter);
  }

  private cleanFormControls(formControls: FormControl[] | any[]) {
    formControls.forEach(control => {
      control.reset();
    })
  }
}
