import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: any) {
  return this.http.post(this.apiUrl, user);
}

  login(username: string, password: string) {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}&password=${password}`);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
