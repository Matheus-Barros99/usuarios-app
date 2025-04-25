import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsuarioService } from '../../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
  standalone: true
})
export class UsuariosComponent implements OnInit {
  usuarios: User[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.carregarUsuarios();
  }

  cadastrarUsuario(){
    this.router.navigate(['/cadastro']);
  }

  carregarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe(data => this.usuarios = data);
  }

  atualizarUsuario(idUsuario: number) {
    this.router.navigate(['/editar', idUsuario]);
  }

  deletarUsuario(id: number) {
    this.usuarioService.deletarUsuario(id).subscribe(() => this.carregarUsuarios);
  }

  filtro: string = '';
  paginaAtual = 0;
  itensPorPagina = 5;

  get usuariosFiltrados(): User[] {
    return this.usuarios.filter(u =>
      u.nome.toLowerCase().includes(this.filtro.toLowerCase()) ||
      u.email.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  get totalPaginas(): number {
    return Math.ceil(this.usuariosFiltrados.length / this.itensPorPagina);
  }

  paginaAnterior() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
    }
  }

  proximaPagina() {
    if (this.paginaAtual < this.totalPaginas - 1) {
      this.paginaAtual++;
    }
  }

  confirmarExclusao(id: number) {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      this.deletarUsuario(id);
      this.router.navigate(['/usuarios']);
    }
  }
}

