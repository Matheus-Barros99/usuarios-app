import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutenticacaoService } from '../../../services/autenticacao.service';
import { LoginDTO } from '../../models/DTO/LoginDTO';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = '';
  
  constructor(private autenticacao: AutenticacaoService, private router: Router) {}

  login() {
    this.autenticacao.login(this.email, this.senha).subscribe({
      next: () => this.router.navigate(['/usuarios']),
      error: () => this.erro = 'Email ou senha inválidos.'
    });
  }

  alterarSenha(){
    this.router.navigate(['/alterar-senha']);
  }
}
