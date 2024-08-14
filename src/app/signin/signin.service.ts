import { Injectable } from '@angular/core';
import { delay, Observable, Subject, tap, take, catchError, of } from 'rxjs';
import { HttpClient, HttpParams, HttpInterceptor  } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private readonly apiUrl = `${environment.API_URL}/signin`;
  public sessionData: {[key: string]: any} = [];
  
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
      tap( body => this.sessionData = body ),
      take(1)
    )
    .subscribe(() => {
      this.signedin$.next(true); 
    });
  
  }
}
