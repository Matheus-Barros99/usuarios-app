import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsuarioService } from '../../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  usuarios: User[] = [];
  novoUsuario: User = {
    id: 0,
    nome: '',
    email: '',
    senha: ''
  };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe(data => this.usuarios = data);
  }

  salvarUsuario() {
    this.usuarioService.criarUsuario(this.novoUsuario).subscribe(() => {
      this.novoUsuario = {
        id: 0,
        nome: '',
        email: '',
        senha: ''
      };
      this.carregarUsuarios();
    })
  }

  atualizarUsuario(usuario: User){
    this.usuarioService.atualizarUsuario(usuario).subscribe(() => this.carregarUsuarios);
  }

  deletarUsuario(id: number) {
    this.usuarioService.deletarUsuario(id).subscribe(() => this.carregarUsuarios);
  }
}

