


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CamposModule } from 'src/app/shared/components/campos/campos.module';
import { CadastroAdvogadoComponent } from './cadastro-advogado/cadastro-advogado.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';






@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
  ],
  declarations: [CadastroAdvogadoComponent,
    CadastroClienteComponent
   ]
})
export class CadastroModule { }