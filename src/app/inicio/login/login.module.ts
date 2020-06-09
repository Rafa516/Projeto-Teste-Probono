

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CamposModule } from 'src/app/shared/components/campos/campos.module';
import { LoginAdvogadoComponent } from './login-advogado/login-advogado.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
  ],
  declarations: [LoginAdvogadoComponent,
    LoginClienteComponent,
    ]
})
export class LoginModule { }