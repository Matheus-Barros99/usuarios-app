import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../app/models/User';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private api = 'http://localhost:5179/api/usuario';

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/RecuperaUsuarios`);
  }

  criarUsuario(usuario: User): Observable<User>{
    return this.http.post<User>(`${this.api}/SalvaUsuario`, usuario);
  } 

  atualizarUsuario(usuario: User): Observable<void>{
    return this.http.put<void>(`${this.api}/${usuario.id}`, usuario);
  }

  deletarUsuario(id: number): Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
