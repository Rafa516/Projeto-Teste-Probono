import { VisualizarProcessosClientesComponent } from './visualizar-processos-clientes/visualizar-processos-clientes.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CadastroProcessosComponent } from './cadastro-processos/cadastro-processos.component';
import { MaterialModule } from '../shared/material/material.module';
import { ListagemProcessosComponent } from './listagem-processos/listagem-processos.component';
import { CamposModule } from '../shared/components/campos/campos.module';
import { VisualizarProcessosComponent } from './visualizar-processos/visualizar-processos.component';
import { TopoComponent } from '../shared/components/topo/topo.component';
import { ListagemProcessosClientesComponent } from './listagem-processos-clientes/listagem-processos-clientes-component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
  ],
  declarations: [CadastroProcessosComponent,
    ListagemProcessosComponent,
    VisualizarProcessosComponent,
    ListagemProcessosClientesComponent,
    VisualizarProcessosClientesComponent,
    TopoComponent
    
  ],
  providers: [CadastroProcessosComponent,
    ListagemProcessosComponent,
    VisualizarProcessosComponent,
    ListagemProcessosClientesComponent,
    VisualizarProcessosClientesComponent,
    TopoComponent,
    
    
  ]
})

export class ProcessosModule { }
