import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;         //Usando @Input para injetar os valores dentro dos componenentes
  @Input() controlName: string;
  @Input() minimo = 0;
  @Input() maximo = 10;
  @Input() step = 1;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {   //Método AbstractControl para definir as propiedades que serão manipuladas nos componentes
    return this.formGroup.controls[this.controlName];
  }

}
