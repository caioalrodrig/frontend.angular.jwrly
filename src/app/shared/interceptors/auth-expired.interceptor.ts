import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SignInService } from '../../signin/signin.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

export const authExpiredInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(SignInService).sessionData['bearer'];
  const router = inject(Router);
  
  if( authToken === undefined ){ 
    return next(req);
  }
  
  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response && event.status === 401 ) {
        router.navigate(['home']);
      }
    })
  );
};
