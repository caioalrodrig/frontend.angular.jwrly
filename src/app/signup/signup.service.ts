import { Injectable } from '@angular/core';
import { delay, Observable, tap, take, catchError, of, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private readonly apiUrl = 'http://localhost:8080/signup';
  
  public signedup$ = new BehaviorSubject(false);

  constructor( private http: HttpClient ) { }

}