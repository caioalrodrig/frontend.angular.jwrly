import { Injectable } from '@angular/core';
import { Observable, tap, take, catchError, of, BehaviorSubject, map, throwError } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private readonly apiUrl = `${environment.API_URL}/signup`;

  public signupMsg$ = new BehaviorSubject<string>("");

  constructor( private http: HttpClient ) { }

  postUser( credentials: {[key: string]: any} ): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      name: credentials['name'],
      email: credentials['email'],
      password: credentials['password']
    });
  }

  getCreateUserResponse(form: FormGroup) {
    this.postUser({
      name: form.controls['name'].value,
      email: form.controls['email'].value,
      password: form.controls['password'].value
    })
    .pipe(
      catchError((error: any) => {
        return throwError(() => new Error(error.error.error));
      }),
      take(1)
    )
    .subscribe({
      next: (user: string) => this.signupMsg$.next(`${user}, você foi cadastrado com sucesso!` ), 
      error: (err: Error) => this.signupMsg$.next(err.message) 
    });
  }

}