import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelogioService {
  readonly apiUrl = `${environment.API_URL}/relogios`;

  count$ = new BehaviorSubject<number>(-1);

  constructor( private http: HttpClient ) { }

  getRelogiosData(paramsObject: {[key: string]: any}){
    let params = new HttpParams();
    Object.keys(paramsObject).forEach(key => {
      if (paramsObject[key]) {
        params = params.set(key, paramsObject[key]);
      }
    }); 
    return this.http.get<any>(this.apiUrl, { params: params })
    .pipe(
      tap(res => this.count$.next(res.count)),
      catchError(error => { return of([[]]) }),
      map(res => {
        if(res.entries.length > 0){
          return res.entries.map((item: any) => {
            return Object.entries(item).map(entry => [entry[0], entry[1] as string]);
          })
        }
      })

    )
  }

}
