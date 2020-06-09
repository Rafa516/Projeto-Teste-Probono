import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { ProcessosService } from 'src/app/core/processos.service';
import { Processos } from 'src/app/shared/models/processos';
import { ConfigPrams } from 'src/app/shared/models/config-prams';

@Component({
  selector: 'app-listagem-processos',
  templateUrl: './listagem-processos.component.html',
  styleUrls: ['./listagem-processos.component.scss']
})
export class ListagemProcessosComponent implements OnInit {
 

  config: ConfigPrams = {
    pagina: 0,
    limite: 4
  };
  processos: Processos[] = [];
  filtrosListagem: FormGroup;
  tipos: Array<string>;

  constructor(private processosService: ProcessosService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.filtrosListagem = this.fb.group({
      texto: [''],
      tipo: ['']
    });

    this.filtrosListagem.get('texto').valueChanges
    .pipe(debounceTime(400))
    .subscribe((val: string) => {
      this.config.pesquisa = val;
      this.resetarConsulta();
    });

    this.filtrosListagem.get('tipo').valueChanges.subscribe((val: string) => {
      this.config.campo = {tipo: 'tipo', valor: val};
      this.resetarConsulta();
    });

    this.tipos = ['Ação Popular', 'Apelação','ATOrd','Atsum','Cível, Processo digital'
    ,'Cível, Requerimento de reintegração de posse','Cumprimento de sentença','Execução fiscal','Habeas corpus criminal',
    'Inventário','Procedimento comum cível','Procedimento do juizado especial cível','Recurso Especial',
    'Usucapião'];

    this.listarProcessos();
  }

  onScroll(): void {
    this.listarProcessos();
  }

  abrir(id: number): void {
    this.router.navigateByUrl('/processos/' + id);
  }

  private listarProcessos(): void {
    this.config.pagina++;
    this.processosService.listar(this.config)
      .subscribe((processos: Processos[]) => this.processos.push(...processos));
  }

  private resetarConsulta(): void {
    this.config.pagina = 0;
    this.processos = [];
    this.listarProcessos();
  }
}
