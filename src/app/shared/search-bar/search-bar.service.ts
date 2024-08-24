import { TRelogiosPaginated } from '../../relogio/relogio.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, map, of, pipe, switchMap, take, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  apiUrl = `${environment.API_URL}/relogios-title`;

  constructor(
    private http: HttpClient
  ) { }

  getTitlesResults(paramsObject: Record<string,any>){
    this.getTitles(paramsObject)
    .subscribe();
  }

  getTitles(paramsObject: Record<string, any>){
    if(!paramsObject['title']) return of(['']);
    return this.http.get<any>(this.apiUrl, {
      params: new HttpParams()
       .set('limit', paramsObject['limit'])      
       .set('title', paramsObject['title']),
    })
    .pipe(
      catchError( error => {return of([''])}),
      map( res => res.map( (watch: any) => watch.title )),
      tap( res => Array.from(new Set(res)) )
    )
  }
}
