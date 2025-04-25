import { Routes } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'usuarios', loadComponent: () => import('./components/usuarios/usuarios.component').then(m => m.UsuariosComponent) },
            { path: 'cadastro', loadComponent: () => import('./components/cadastro/cadastro.component').then(m => m.CadastroComponent) },
            { path: 'editar/:idUsuario', loadComponent: () => import('./components/editar/editar.component').then(m => m.EditarComponent) },
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
