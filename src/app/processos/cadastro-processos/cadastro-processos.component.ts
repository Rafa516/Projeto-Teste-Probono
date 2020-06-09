import { VisualizarProcessosComponent } from './../visualizar-processos/visualizar-processos.component';
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
  selector: 'app-cadastro-processos',
  templateUrl: './cadastro-processos.component.html',
  styleUrls: ['./cadastro-processos.component.scss']
})
export class CadastroProcessosComponent implements OnInit {

  id: number;
  cadastro: FormGroup;
  tipos: Array<string>;
  textoBotao: string;
  textoToolbar:string;


  constructor(public validacao: ValidarCamposService,
              public dialog: MatDialog,
              private fb: FormBuilder,
              private processosService: ProcessosService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public visualizar: VisualizarProcessosComponent) { }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void {
   
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.textoBotao = 'Atualizar'
      this.textoToolbar ='Editar'
      this.processosService.visualizar(this.id)
        .subscribe((processos: Processos) => this.criarFormulario(processos));
    } else {
      this.criarFormulario(this.criarProcessosEmBranco());
      this.textoBotao = 'Salvar'
      this.textoToolbar='Cadastrar'
    }

    this.tipos = ['Ação Popular', 'Apelação','ATOrd','Atsum','Cível, Processo digital'
    ,'Cível, Requerimento de reintegração de posse','Cumprimento de sentença','Execução fiscal','Habeas corpus criminal',
    'Inventário','Procedimento comum cível','Procedimento do juizado especial cível','Recurso Especial',
    'Usucapião'];

  }

  submit(): void {
    this.cadastro.markAllAsTouched();
    if (this.cadastro.invalid) {
      return;
    }

    const processos = this.cadastro.getRawValue() as Processos;
    if (this.id) {
      processos.id = this.id;
      this.editar(processos);
    } else {
      this.salvar(processos);
    }
  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }

  private criarFormulario(processos: Processos): void {  //Método para criar o cadastro dos processos com FormControl
    this.cadastro = this.fb.group({
      titulo: [processos.titulo, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      data: [processos.data, [Validators.required]],
      descricao: [processos.descricao],
      tipo: [processos.tipo, [Validators.required]]
    });
  }

  private criarProcessosEmBranco(): Processos {
    return {
      id: null,
      titulo: null,
      data: null,
      descricao: null,
      tipo: null
    } as Processos;
  }

  private salvar(processos: Processos): void { //Método para salvar o cadastro, com mensagens de erros dinâmicos
    this.processosService.salvar(processos).subscribe(() => {
      const config = {
        data: {
          btnSucesso: 'Ir para a listagem',
          btnCancelar: 'Cadastrar um novo Processo',
          corBtnSucesso: 'primary',
          corBtnCancelar: 'accent',
          possuirBtnFechar: true
        } as Alerta
      };
      const dialogRef = this.dialog.open(AlertaComponent, config);
      dialogRef.afterClosed().subscribe((opcao: boolean) => {
        if (opcao) {
          this.router.navigateByUrl('processos');
        } else {
          this.reiniciarForm();
        }
      });
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao salvar o registro!',
          descricao: 'Não conseguimos salvar seu registro, favor tentar novamente mais tarde',
          corBtnSucesso: 'warn',
          btnSucesso: 'Fechar'
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
    });
  }

  private editar(processos: Processos): void {
    this.processosService.editar(processos).subscribe(() => {
      const config = {
        data: {
          descricao: 'Seu registro foi atualizado com sucesso!',
          btnSucesso: 'Ir para a listagem',
          corBtnSucesso: 'primary',
        } as Alerta
      };
      const dialogRef = this.dialog.open(AlertaComponent, config);
      dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('processos'));
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao editar o registro!',
          descricao: 'Não conseguimos editar seu registro, favor tentar novamente mais tarde',
          corBtnSucesso: 'warn',
          btnSucesso: 'Fechar'
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
    });
  }

}
