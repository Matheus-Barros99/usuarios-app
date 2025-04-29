import { Component } from '@angular/core';
import { AlterarSenhaDTO } from '../../models/DTO/AlterarSenhaDTO';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alterar-senha',
  imports: [CommonModule, FormsModule],
  templateUrl: './alterar-senha.component.html',
  styleUrl: './alterar-senha.component.scss',
  standalone: true
})
export class AlterarSenhaComponent {
  dados: AlterarSenhaDTO = {
    email: '',
    senha: ''
  };

  confirmacaoSenha = '';

  erro = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  atualizarSenha() {
    if (this.dados.email != '' && this.confirmacaoSenha == this.dados.senha) {
      this.usuarioService.alterarSenha(this.dados).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: () => this.erro = 'Falha ao atualizar senha!'
      });
    }
  }
}
