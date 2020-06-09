import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent {

  @Input() titulo: string;            //Usando @Input para injetar os valores dentro dos componenentes
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {       //Método AbstractControl para definir as propiedades que serão manipuladas nos componentes
    return this.formGroup.controls[this.controlName];
  }

}
