import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { catchError, map, of, Subject, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly apiUrl = `${environment.API_URL}/pessoas`;
  
  public relogioTitles$ = new Subject<string[]>(); 

  constructor(
    private http: HttpClient
  ) { }

  getLikedTitleWatches(params: Record<string,any>){
    return this.http.get<any>(this.apiUrl, { params: params })
      .pipe(
        take(1),
        catchError(error => { return of(['']) }),
        map(res => res.map((item: any) => item.title)),
      );
        
  }

}

