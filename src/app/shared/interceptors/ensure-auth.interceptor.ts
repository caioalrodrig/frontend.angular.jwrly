import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SignInService } from '../../signin/signin.service';

export function ensureAuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const authToken = inject(SignInService).sessionData['bearer'];

  if( authToken === undefined){ 
    return next(req);
  }

  const newHeader = req.headers.set('bearer', authToken);

  const newReq = req.clone({ headers: 
    newHeader 
  });

  return next(newReq);
}
