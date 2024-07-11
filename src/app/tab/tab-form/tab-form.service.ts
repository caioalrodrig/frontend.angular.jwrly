import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabFormService {
  private apiUrl = 'http://localhost:8080/relogios';

  constructor( private http: HttpClient) { }

  getData(): Observable<any>{
    const res = this.http.get<any>(this.apiUrl);
    return res;
  }
}
