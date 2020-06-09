import { InicioComponent } from './inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { MaterialModule } from '../shared/material/material.module';

import { CamposModule } from '../shared/components/campos/campos.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    InfiniteScrollModule
  ],
  declarations: [InicioComponent
   ]
})
export class InicioModule { }