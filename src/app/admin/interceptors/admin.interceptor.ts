import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const adminToken = <string>localStorage.getItem('token');
    const adminRequest = request.clone({
      headers: request.headers.set('Authorization', adminToken),
    })
    return next.handle(adminRequest);
  }
}
