import { CadastroModule } from './inicio/cadastro/cadastro.component.module';
import { RodapeComponent } from './shared/components/rodape/rodape.component';

import { InicioComponent } from './inicio/inicio.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MaterialModule } from './shared/material/material.module';


import { AlertaComponent } from './shared/components/alerta/alerta.component';
import { LoginModule } from './inicio/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AlertaComponent,
    RodapeComponent,

   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule,
    LoginModule,
    CadastroModule,
    
  ],
  entryComponents: [AlertaComponent],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
