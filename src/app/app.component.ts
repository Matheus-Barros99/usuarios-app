import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from "./components/login/login.component";
import { CadastroComponent } from './components/cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsuariosComponent, HttpClientModule, LoginComponent, CadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'usuarios-app';
}
