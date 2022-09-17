import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  accessToken: String | null | undefined;
  expiresAt: Number | null | undefined;

  constructor(public router: Router) {}

  public isAuthenticate(): void {
    localStorage.getItem('app-token');
  }

  public login(): void {
    localStorage.setItem('app-token', new Date().getTime().toString());
  }

  public logout(): void {
    // Remove tokens from localStorage
    localStorage.removeItem('app-token');
    // Go back to the home route
    this.router.navigate(['/']);
  }
}
