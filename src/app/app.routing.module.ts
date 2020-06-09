import { ListagemProcessosClientesComponent } from './processos/listagem-processos-clientes/listagem-processos-clientes-component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessosModule } from './processos/processos.module';
import { CadastroProcessosComponent } from './processos/cadastro-processos/cadastro-processos.component';
import { ListagemProcessosComponent } from './processos/listagem-processos/listagem-processos.component';
import { VisualizarProcessosComponent } from './processos/visualizar-processos/visualizar-processos.component';

import { InicioComponent } from './inicio/inicio.component';
import { LoginAdvogadoComponent } from './inicio/login/login-advogado/login-advogado.component';
import { LoginClienteComponent } from './inicio/login/login-cliente/login-cliente.component';
import { VisualizarProcessosClientesComponent } from './processos/visualizar-processos-clientes/visualizar-processos-clientes.component';
import { CadastroAdvogadoComponent } from './inicio/cadastro/cadastro-advogado/cadastro-advogado.component';
import { CadastroClienteComponent } from './inicio/cadastro/cadastro-cliente/cadastro-cliente.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    children: [
      {
        path: '',
        component: InicioComponent
      }
    ]
  },
  {
    path: 'login-advogado',
    children: [
      {
        path: '',
        component: LoginAdvogadoComponent
      },
    ]
  },
  {
    path: 'cadastro-advogado',
    children: [
      {
        path: '',
        component: CadastroAdvogadoComponent
      },
    ]
  },
  {

    path: 'processos',
    children: [
      {
        path: '',
        component: ListagemProcessosComponent
      },
      {
        path: 'cadastro',
        children: [
          {
            path: '',
            component: CadastroProcessosComponent
          },
          {
            path: ':id',
            component: CadastroProcessosComponent
          }
        ]
      },
      {
        path: ':id',
        component: VisualizarProcessosComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login-cliente',
    children: [
      {
        path: '',
        component: LoginClienteComponent
      },


    ]
  },
  {
    path: 'cadastro-cliente',
    children: [
      {
        path: '',
        component: CadastroClienteComponent
      },
    ]
  },
  {
    path: 'processos-clientes',
    children: [
      {
        path: '',
        component: ListagemProcessosClientesComponent
      },
      {
        path: ':id',
        component: VisualizarProcessosClientesComponent,
        pathMatch: 'full'
      }
    ]
  },
  { path: '**', redirectTo: 'processos' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProcessosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
