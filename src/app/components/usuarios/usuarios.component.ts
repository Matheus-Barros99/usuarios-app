import { Component, inject, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit {
usuarios: Usuario[] = [];
novoUsuario: Usuario = {
  id: 0, 
  nome: '', 
  email: ''};
  
  constructor(private usuarioService: UsuarioService){}

  ngOnInit() {
    this.carregarUsuarios();
  }

  carregarUsuarios(){
    this.usuarioService.listarUsuarios().subscribe(data => this.usuarios = data);
  }

  salvarUsuario(){
    this.usuarioService.criarUsuario(this.novoUsuario).subscribe(() => {
      this.novoUsuario = {
        id: 0, 
        nome: '', 
        email: ''};
        this.carregarUsuarios();
    })
  }

  deletarUsuario(id: number){
    this.usuarioService.deletarUsuario(id).subscribe(() => this.carregarUsuarios);
  }
}

