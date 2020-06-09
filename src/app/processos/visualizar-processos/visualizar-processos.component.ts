import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProcessosService } from 'src/app/core/processos.service';
import { Processos } from 'src/app/shared/models/processos';
import { Alerta } from 'src/app/shared/models/alerta';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';

@Component({
  selector: 'app-visualizar-processos',
  templateUrl: './visualizar-processos.component.html',
  styleUrls: ['./visualizar-processos.component.css']
})
export class VisualizarProcessosComponent implements OnInit {

  processos: Processos;
  id: number;
  ativador: boolean

  constructor(public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private processosService: ProcessosService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.visualizar();
  }

  editar(): void {
    this.router.navigateByUrl('/processos/cadastro/' + this.id);
    this.ativador = false
  }

  excluir(): void {
    const config = {
      data: {
        titulo: 'Você tem certeza que deseja excluir?',
        descricao: 'Caso você tenha certceza que deseja excluir, clique no botão OK',
        corBtnCancelar: 'primary',
        corBtnSucesso: 'warn',
        possuirBtnFechar: true
      } as Alerta
    };
    const dialogRef = this.dialog.open(AlertaComponent, config);
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.processosService.excluir(this.id)
          .subscribe(() => this.router.navigateByUrl('/processos'));
      }
    });
  }

  private visualizar(): void {
    this.processosService.visualizar(this.id).subscribe((processos: Processos) => this.processos = processos);
  }


}
