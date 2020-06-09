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
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  id: number;
  loginForm: FormGroup;

  tipos: Array<string>;

  constructor(public validacao: ValidarCamposService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private processosService: ProcessosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.loginForm = fb.group({
      nome: ['', ([Validators.minLength(1), Validators.required,])],
      cpf: ['', ([Validators.minLength(14), Validators.required])],
      senha: ['', ([Validators.minLength(6), Validators.required])],
      confirmaSenha: ['', ([Validators.minLength(6), Validators.required])],
    });
  }



  ngOnInit(): void {


  }
  cadastraCliente() {
    if (this.loginForm.value.senha == this.loginForm.value.confirmaSenha) {

      const config = {
        data: {
          titulo: 'Sucesso',
          descricao: 'Cliente cadastrado com Sucesso',
          btnSucesso: 'Ok',
          corBtnSucesso: 'accent',
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
      this.router.navigateByUrl('login-cliente');
    }
    else {
      const config = {
        data: {
          titulo: 'Erro',
          descricao: 'Confirmação de senha ínvalido',
          btnSucesso: 'Ok',
          corBtnSucesso: 'warn',
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
    }



  }
  voltar() {
    this.router.navigate(['/inicio']);
  }
}