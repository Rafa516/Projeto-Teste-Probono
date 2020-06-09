import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.css']
})
export class InputTextareaComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;       //Usando @Input para injetar os valores dentro dos componenentes
  @Input() controlName: string;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {     //Método AbstractControl para definir as propiedades que serão manipuladas nos componentes
    return this.formGroup.controls[this.controlName];
  }

}
