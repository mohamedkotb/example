import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogToken } from './../modals/dialog-token';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router : Router,public dialog: MatDialog) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let Token = localStorage.getItem("token");

      if (Token != 'true' && this.router.url !='/') {

        const dialogRef = this.dialog.open(DialogToken, {
          width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed' , result);

        if (result == true) {
          localStorage.setItem('token','true');
        }else{
          localStorage.removeItem('loginBy');
          localStorage.removeItem('token');
           location.reload(true);
        }

        });





      }
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                localStorage.removeItem('loginBy');
                location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}
