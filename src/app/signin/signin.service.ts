import { Injectable } from '@angular/core';
import { delay, Observable, Subject, tap, take } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private apiUrl = 'http://localhost:8080/signin';
  public bearerToken: string = '';
  public userId: string = '';
  signInError$ = new Subject();

  constructor( private http: HttpClient ) { }

  postUser( credentials: {[key: string]: any} ): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      email: credentials['email'],
      password: credentials['password']
    });

  }

  getAccessToken(form: FormGroup): Observable<boolean>{
    return this.postUser({
      email: form.controls['email'].value,
      password: form.controls['password'].value
    })
    .pipe(
      delay(2000),
      tap(console.log)
    )
  
  }
}
