import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { ProcessosService } from 'src/app/core/processos.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';
import { EmailValidator } from 'src/app/shared/validators/email';

@Component({
  selector: 'app-login',
  templateUrl: './cadastro-advogado.component.html',
  styleUrls: ['./cadastro-advogado.component.scss']
})
export class CadastroAdvogadoComponent implements OnInit {



  loginForm: FormGroup;

  tipos: Array<string>;

  constructor(public validacao: ValidarCamposService,
    public dialog: MatDialog,
    private fb: FormBuilder,
   
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.loginForm = fb.group({
      nome: ['', ([Validators.minLength(1), Validators.required,])],
      email: ['', ([Validators.minLength(6), Validators.required, EmailValidator.isValid])],
      senha: ['', ([Validators.minLength(6), Validators.required])],
      confirmaSenha: ['', ([Validators.minLength(6), Validators.required])],
    });
  }



  ngOnInit(): void {


  }


  cadastraAdvogado() {
    if (this.loginForm.value.senha == this.loginForm.value.confirmaSenha) {

      
      const config = {
        data: {
          titulo: 'Sucesso',
          descricao: 'Advogado cadastrado com Sucesso',
          btnSucesso: 'Ok',
          corBtnSucesso: 'primary',
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
      this.router.navigateByUrl('login-advogado');
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
    this.router.navigate(['/login-advogado']);
  }
}