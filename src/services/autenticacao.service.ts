import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private api = 'http://localhost:5179/api/Acesso';

  constructor(private http: HttpClient) { }

  login(email: string, senha: string) {
    return this.http.post<{ token: string }>(`${this.api}/Login`, { email, senha }).pipe(
      tap(res => localStorage.setItem('token', res.token))
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogado(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
