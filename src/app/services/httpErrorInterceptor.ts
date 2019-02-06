import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse,
         HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry'; // don't forget the imports
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              console.log('event--->>>', event);
              // this.errorDialogService.openDialog(event);
          }
          return event;
      }),
      catchError((error: HttpErrorResponse) => {
          let data = {};
          data = {
              reason: error && error.error.reason ? error.error.reason : '',
              status: error.status
          };
          console.error(`Backend returned code ${error.status}, body was: ${error}`);
          return throwError(error);
      }));

    // return next.handle(request).pipe(
    //   map((event: HttpEvent<any>) => {
    //       if (event instanceof HttpResponse) {
    //           console.log('event--->>>', event);
    //       }
    //       return event;
    //   }),
    //   .catchError((err: HttpErrorResponse) => {

    //     if (err.error instanceof Error) {
    //       // A client-side or network error occurred. Handle it accordingly.
    //       console.error('An error occurred:', err.error.message);
    //     } else {
    //       // The backend returned an unsuccessful response code.
    //       // The response body may contain clues as to what went wrong,
    //       console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    //     }

    //     return Observable.of(new HttpResponse({body: [
    //       {name: "Default values returned by Interceptor", id: 88},
    //       {name: "Default values returned by Interceptor(2)", id: 89}
    //     ]}));
    //    // return Observable.empty<HttpEvent<any>>();
    //   });
  }
}