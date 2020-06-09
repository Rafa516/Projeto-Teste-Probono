import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProcessosService } from 'src/app/core/processos.service';
import { Processos } from 'src/app/shared/models/processos';
import { Alerta } from 'src/app/shared/models/alerta';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';


@Component({
  selector: 'app-visualizar-processos',
  templateUrl: './visualizar-processos-clientes.component.html',
  styleUrls: ['./visualizar-processos-clientes.component.css']
})
export class VisualizarProcessosClientesComponent implements OnInit {
  
  processos: Processos;
  id: number;
  ativador:boolean

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private processosService: ProcessosService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.visualizar();
  }

  private visualizar(): void {
    this.processosService.visualizar(this.id).subscribe((processos: Processos) => this.processos = processos);
  }

  logout(){
    const config = {
      data: {
        titulo: 'Deslogar',
        descricao: 'Deseja realmente deslogar?',
        btnSucesso: 'Sim',
        btnCancelar: 'Não',
        corBtnSucesso: 'accent',
        corBtnCancelar: 'warn',
        possuirBtnFechar: true
      } as Alerta
    };
    const dialogRef = this.dialog.open(AlertaComponent, config);
      dialogRef.afterClosed().subscribe((opcao: boolean) => {
        if (opcao) {
          this.router.navigateByUrl('inicio');
        } else {
          true
        }
      });
  }
  voltar(){
    this.router.navigate(['/processos-clientes'])
  }

}
