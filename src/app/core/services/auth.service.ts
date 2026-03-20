import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { Router } from '@angular/router';
// import { ApiService } from './api.service';
// import { tap } from 'rxjs/operators';
// import { LoginCredentials, UserToken } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
//   private api = inject(ApiService);
//   private router = inject(Router);
//   private platformId = inject(PLATFORM_ID);

//   private readonly ACCESS_TOKEN_KEY = 'access_token';

//   loggedIn = signal<boolean>(false);

//   constructor() {
//     this.loggedIn.set(this.isLoggedIn());
//   }

//   login(credentials: LoginCredentials) {
//     this.clearAccessToken();
//     this.loggedIn.set(false);

//     return this.api
//       .post<{ token: string }>('/accounts/login', credentials)
//       .pipe(
//         tap((res) => {
//           this.setAccessToken(res.token);
//           this.loggedIn.set(true);
//         }),
//       );
//   }

//   getDecodedToken(): UserToken | null {
//     const token = this.getAccessToken();
//     if (!token) return null;

//     try {
//       const payload = token.split('.')[1];
//       const decoded = JSON.parse(atob(payload));
//       return decoded as UserToken;
//     } catch (e) {
//       return null;
//     }
//   }

//   private getAccessToken(): string | null {
//     if (isPlatformBrowser(this.platformId)) {
//       return localStorage.getItem(this.ACCESS_TOKEN_KEY);
//     }
//     return null;
//   }

//   private setAccessToken(token: string): void {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.setItem(this.ACCESS_TOKEN_KEY, token);
//     }
//   }

//   private clearAccessToken(): void {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.removeItem(this.ACCESS_TOKEN_KEY);
//     }
//   }

    isLoggedIn(): boolean {
        // const decoded = this.getDecodedToken();
        // if (!decoded) return false;

        // const now = Math.floor(Date.now() / 1000);
        // return decoded.exp > now;
        return false;
    }

//   logout() {
//     if (isPlatformBrowser(this.platformId)) {
//       localStorage.removeItem(this.ACCESS_TOKEN_KEY);
//     }
//     this.loggedIn.set(false);
//     this.router.navigate(['/login']);
//   }
}
