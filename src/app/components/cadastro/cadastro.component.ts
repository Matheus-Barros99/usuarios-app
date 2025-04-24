import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/User';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
  standalone: true
})
export class CadastroComponent {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  novoUsuario: User = {
    id: 0,
    nome: '',
    email: '',
    senha: '',
    salt: ''
  };

  salvarUsuario() {
    this.usuarioService.criarUsuario(this.novoUsuario).subscribe(() => {
      this.novoUsuario = {
        id: 0,
        nome: '',
        email: '',
        senha: '',
        salt: ''
      },
      this.router.navigate(['/usuarios']);      
    });
  }
}
