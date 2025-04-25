import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
  selector: 'app-layout',
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true
})
export class LayoutComponent {
  constructor(private autenticacao: AutenticacaoService, private router: Router) { }

  logout() {
    this.autenticacao.logout();
    this.router.navigate(['/login']);
  }
}
