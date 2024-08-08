import { Injectable } from '@angular/core';
import { delay, Observable, Subject, tap, take, catchError, of } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private readonly apiUrl = 'http://localhost:8080/signin';
  public bearerToken: string = '';
  public userId: string = '';
  
  public signedin$ = new Subject();

  constructor( private http: HttpClient ) { }

  postUser( credentials: {[key: string]: any} ): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      email: credentials['email'],
      password: credentials['password']
    });
  }

  getAccessToken(form: FormGroup){
    
    this.postUser({
      email: form.controls['email'].value,
      password: form.controls['password'].value
    })
    .pipe(
      catchError(error => {
        this.signedin$.next(false);
        return of();
      }),
      tap(console.log),
      take(1)
    )
    .subscribe(() => {
      this.signedin$.next(true); 
    });
  
  }
}
