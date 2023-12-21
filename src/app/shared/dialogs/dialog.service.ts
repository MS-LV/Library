import {Injectable} from '@angular/core';
import {ApiErrorComponent} from "./api-error/api-error.component";
import {MatDialog} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable()
export class DialogService {

    constructor(private dialog: MatDialog) {
    }

    openApiDialog(data: HttpErrorResponse): Observable<never> {
        this.dialog.open(ApiErrorComponent, {data});
        return of();
    }
}
