import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-character-modal',
  templateUrl: './new-character-modal.component.html',
  styleUrl: './new-character-modal.component.scss'
})
export class NewCharacterModalComponent {
  newCharacterFormGroup: FormGroup = new FormGroup({
    nome: new FormControl(''),
    classe: new FormControl(''),
    raca: new FormControl(''),
    // Deve ter interface, pois dependendo da escolha pode haver sub-raça
    antecedente: new FormControl(''),
    // Deve ter interface, opções
    nivel: new FormControl(''),
    // Number, 1 a 20
    alinhamento: new FormControl(''),
    // Deve ter interface, opções
  });

  currentCharacterData = {
    nome: '',
    classe: '',
    raca: '',
    antecedente: '',
    nivel: '',
    alinhamento: '',
  };

  @Output() closeModal: EventEmitter<any> = new EventEmitter();
}
