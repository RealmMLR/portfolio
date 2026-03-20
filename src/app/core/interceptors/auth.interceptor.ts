import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@/environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('assets/i18n/')) {
    return next(req);
  }

  const token = localStorage.getItem('access_token');
  if (
    req.url.includes('/accounts/login') ||
    req.url.includes('/accounts/register')
  ) {
    return next(req);
  }

  if (!environment.skipAuth && token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq);
  }
  return next(req);
};
