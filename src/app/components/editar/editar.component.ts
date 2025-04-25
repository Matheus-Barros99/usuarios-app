import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-editar',
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss',
  standalone: true
})
export class EditarComponent implements OnInit {

  idUsuario!: number;
  usuarioEditado = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    salt: ''
  };

  erro = '';

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idUsuario = Number(this.route.snapshot.paramMap.get('idUsuario'));
    this.carregarUsuario();
  }

  carregarUsuario() {
    this.usuarioService.recuperarUsuarioPorId(this.idUsuario).subscribe(dados => this.usuarioEditado = dados);
  }

  atualizarUsuario() {
    this.usuarioService.atualizarUsuario(this.usuarioEditado).subscribe({
      next: () => {
        this.router.navigate(['/usuarios']);
      },
      error: () => this.erro = 'Falha ao atualizar usuário'
    });

  }
}
