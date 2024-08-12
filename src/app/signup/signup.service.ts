import { Injectable } from '@angular/core';
import { delay, Observable, tap, take, catchError, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private readonly apiUrl = `${environment.API_URL}/signup`;
  
  public signedup$ = new BehaviorSubject(false);

  constructor( private http: HttpClient ) { }

}