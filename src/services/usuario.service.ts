import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../app/models/User';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AlterarSenhaDTO } from '../app/models/DTO/AlterarSenhaDTO';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private api = 'http://localhost:5179/api/usuario';

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/RecuperarUsuarios`);
  }

  recuperarUsuarioPorId(idUsuario: number): Observable<User>{
    return this.http.get<User>(`${this.api}/RecuperarUsuarioPorId?idUsuario=${idUsuario}`,);
  }

  criarUsuario(usuario: User): Observable<User>{
    return this.http.post<User>(`${this.api}/SalvarUsuario`, usuario);
  } 

  atualizarUsuario(usuario: User): Observable<void>{
    return this.http.put<void>(`${this.api}/EditarUsuario?id=${usuario.id}`, usuario);
  }

  alterarSenha(dados: AlterarSenhaDTO): Observable<void>{
    return this.http.put<void>(`${this.api}/AlterarSenha`, dados);
  }

  deletarUsuario(id: number): Observable<void>{
    return this.http.delete<void>(`${this.api}/ExcluirUsuario?id=${id}`);
  }
}
