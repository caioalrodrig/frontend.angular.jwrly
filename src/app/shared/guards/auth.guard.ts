import { CanActivateFn } from '@angular/router';
import { SignInService } from '../../signin/signin.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const signInService = inject(SignInService);

  return signInService.signedin$.pipe(
    map(signedIn => { return signedIn ? true : false })
  );
};

