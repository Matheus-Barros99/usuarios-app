import { CanActivateFn, Router, } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { inject } from '@angular/core';

export const autenticacaoGuard: CanActivateFn = (route, state) => {
  const authService = inject(AutenticacaoService);
  const router = inject(Router);

  return authService.isLogado() || router.createUrlTree(['/login']);
};
