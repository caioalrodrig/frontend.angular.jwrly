// import { environment } from '../../../environments/environment.development';
// import { HttpClient, HttpParams  } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, map, Observable, take, tap } from 'rxjs';
// import { TRelogiosPaginated } from '../../relogio/relogio.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class TabFormService {
//   readonly apiUrl = `${environment.API_URL}/relogios`;

//   public relogiosResponse$ = new BehaviorSubject<TRelogiosPaginated>([[]]);

//   constructor( private http: HttpClient ) { }

//   getRelogiosData(paramsObject: {[key: string]: any}){
   
//     this.http.get<any>(this.apiUrl, 
//       { params: new HttpParams()
//         .set('page', paramsObject['page'])      
//         .set('limit', paramsObject['limit'])   
//       }
//     )
//     .pipe(
//       map(res => {
//         return res.map((item: any) => {
//           return Object.entries(item).map(entry => [entry[0], entry[1] as string]);
//         })
//       }),
//       take(1),

//     )
//     .subscribe({
//       next: (res) => this.relogiosResponse$.next(res),
//       error: (error) => {
//         console.error(`Erro ao buscar dados: ${error}`);
//       }
//     });
//   }

// }
