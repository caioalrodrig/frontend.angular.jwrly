import { HttpEventType, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SignInService } from '../../signin/signin.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

export function authExpiredInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const authToken: string = inject(SignInService).sessionData.bearer;
  const router = inject(Router);

  if( authToken === '' ){ 
    router.navigate(['signup']); // debugar aqui
    return next(req);
  }

  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response && event.status === 401 ) {
        console.log("aaaa");
        router.navigate(['signup']);
      }
    })
  );
};
