import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = '088567';
    req = req.clone({
      headers: req.headers.set('x-api-key', apiKey)      
    });

    return next.handle(req);
  }

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('x-api-key', `xxxxxxxxxxxxxxxxxxxx`);
  // }
}
