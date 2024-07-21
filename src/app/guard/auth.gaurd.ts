import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  const localData = authService.getLocalStorageData();
  if (localData != null) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
