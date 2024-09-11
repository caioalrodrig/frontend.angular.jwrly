import { Injectable } from '@angular/core';
import { Observable, tap, take, catchError, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment.development';
import { IUserSession } from '../shared/session.interface';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private readonly apiUrl = `${environment.API_URL}/signin`;
  
  public sessionData$ = new BehaviorSubject<IUserSession>({name: '', userId: 0, bearer: ''});
  
  public sessionData: IUserSession = {name: '', userId: 0, bearer: ''};

  public signedin$ = new BehaviorSubject<boolean>(false);

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
      tap( res => { this.sessionData$.next(res);
        this.sessionData = res;
      }),
      take(1)
    )
    .subscribe(() => {
      this.signedin$.next(true); 
    });
  
  }
}
