import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, take, tap } from 'rxjs';
import { ILikeRelogios } from './wish-list.interface';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  readonly apiUrl = `${environment.API_URL}/pessoas`;

  constructor( private http: HttpClient ) { }

  likeRelogio(params: ILikeRelogios){
    return this.http.post<any>(this.apiUrl, { params: params })
    .pipe()
  }
}
