import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;      //Usando @Input para injetar os valores dentro dos componenentes
  @Input() controlName: string;
  @Input() opcoes: Array<string>;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {   //Método AbstractControl para definir as propiedades que serão manipuladas nos componentes
    return this.formGroup.controls[this.controlName];
  }
}
