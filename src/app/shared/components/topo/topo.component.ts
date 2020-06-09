import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;


  constructor( private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
  }


  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav() {
    this.sidenav.close();
  }

  goCadastrar(){
    this.router.navigate(['/processos/cadastro']);
  }
  goIniciar(){
    this.router.navigate(['/processos']);
  }
  logout(){
    const config = {
      data: {
        titulo: 'Deslogar',
        descricao: 'Deseja realmente deslogar?',
        btnSucesso: 'Sim',
        btnCancelar: 'Não',
        corBtnSucesso: 'primary',
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
  

}
