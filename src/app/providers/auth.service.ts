import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(    private http: HttpClient,
    ) { }


  getUsers() {
    const t_requestURL ='./assets/users.json';
    let headers = new HttpHeaders();
    return this.http.get<any>(t_requestURL , {headers})
        .pipe(map(response => {
            return response;
        }));
  }

  TokenExpired(){
  const t_requestURL ='./tokenExpired';
  let headers = new HttpHeaders();
  return this.http.get<any>(t_requestURL , {headers})
      .pipe(map(response => {
          return response;
      }));
  // return throwError({ status: 401, error: { message: 'unauthorized' } });
}

}
