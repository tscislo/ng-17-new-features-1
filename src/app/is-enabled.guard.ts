import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const isEnabledGuard: CanActivateFn = (route, state) => {
  const isAuthorized = inject(AuthService).isAuthorized;
  return isAuthorized
};
