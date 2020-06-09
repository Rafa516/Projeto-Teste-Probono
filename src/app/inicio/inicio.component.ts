import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  id: number;

  tipos: Array<string>;

  constructor(
    private router: Router,
    ) { }



  ngOnInit(): void {


  }
  goLoginAdvogado() {

    this.router.navigate(['/login-advogado']);
  }
  goLoginCliente() {
    this.router.navigate(['/login-cliente']);
  }
}
