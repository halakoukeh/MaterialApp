import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import * as auth0 from 'auth0-js';

(window as any).global = window;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  autho0 = new auth0.WebAuth({
    clientID: 'c8bhJzJhhYsqaFyC7Riy9SrP0aM8vqwa',
    domain: 'halakouka@auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200',
    scope: 'openid'
  });

  public login(): void {
    this.autho0.authorize();
  }
  
  constructor() { }
}
