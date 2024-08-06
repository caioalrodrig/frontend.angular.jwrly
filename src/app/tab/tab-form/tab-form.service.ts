import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabFormService {
  private apiUrl = 'http://localhost:8080/relogios';

  constructor( private http: HttpClient ) { }

  getData(): Observable<any> {
    const paramsObject : { [key: string]: any } = {
      page: 2,
      limit: 5
    };
   
    const httpParams = new HttpParams()
      .set('page', paramsObject['page'])      
      .set('limit', paramsObject['limit'])  

    return this.http.get<any>(this.apiUrl, { params: httpParams });
  }
}
