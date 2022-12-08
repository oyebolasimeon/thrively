import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { request } from 'http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  urlsToNotUse: Array<string>;
  constructor() { 

    this.urlsToNotUse= [
      'https://oyebolasimeon.cloud/'
      // 'myController1/myAction2/.+',
      // 'myController1/myAction3'
    ];
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.isValidRequestForInterceptor(req.url)){

    
    const apiKey = '';
    const idKey = ''

    let modifiedreq = req.clone({
      // headers: req.headers.set('x-api-key', apiKey),
      // headers: req.headers.set('x-api-key', apiKey),    
      setHeaders: {
        "x-api-key": `${apiKey}`,
        "api-id": `${idKey}`,
        'Access-Control-Allow-Origin': '*'
      },

    });
    return next.handle(modifiedreq);
  }

    return next.handle(req);
  }


  private isValidRequestForInterceptor(requestUrl: string): boolean {
    let positionIndicator: string = 'api/';
    let position = requestUrl.indexOf(positionIndicator);
    if (position > 0) {
      let destination: string = requestUrl.substr(position + positionIndicator.length);
      for (let address of this.urlsToNotUse) {
        if (new RegExp(address).test(destination)) {
          return false;
        }
      }
    }
    return true;
  }

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append('Content-Type', 'application/json');
  //   headers.append('x-api-key', `xxxxxxxxxxxxxxxxxxxx`);
  // }
}
