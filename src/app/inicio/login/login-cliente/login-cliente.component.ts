import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { Processos } from 'src/app/shared/models/processos';
import { ProcessosService } from 'src/app/core/processos.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';

@Component({
  selector: 'app-login',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent implements OnInit {

  id: number;

  tipos: Array<string>;

  constructor(public validacao: ValidarCamposService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private processosService: ProcessosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {


  }
  login() {

    this.router.navigate(['/processos-clientes']);
  }
  cadastroCliente() {
    this.router.navigate(['/cadastro-cliente']);
  }
  voltar(){
    this.router.navigate(['/inicio']);
  }
}
