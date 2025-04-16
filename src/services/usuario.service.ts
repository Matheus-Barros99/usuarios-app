import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../app/models/Usuario';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private api = 'http://localhost:5179/api/usuario';

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.api);
  }

  criarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.api, usuario);
  } 

  atualizarUsuario(usuario: Usuario): Observable<void>{
    return this.http.put<void>(`${this.api}/${usuario.id}`, usuario);
  }

  deletarUsuario(id: number): Observable<void>{
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
