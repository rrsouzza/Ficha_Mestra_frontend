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

export class NewCharacterModalComponent_segunda_parte {
  newCharacterFormGroup: FormGroup = new FormGroup({
    // Os dados abaixo serão dos atributos --> Todos recebem Number até 18
    Forca: new FormControl(''),
    Destreza: new FormControl(''),
    Constituicao: new FormControl(''),
    Inteligencia: new FormControl(''),
    Sabedoria: new FormControl(''),
    Carisma: new FormControl(''),
    // Os dados abaixo são as perícias --> Receberão Verdadeiro ou Falso
    Acrobacia: new FormControl(''),
    Arcanismo: new FormControl(''),
    Atletismo: new FormControl(''),
    Atuacao: new FormControl(''),
    Enganacao: new FormControl(''),
    Furtividade: new FormControl(''),
    História: new FormControl(''),
    Intimidacao: new FormControl(''),
    Intuicao: new FormControl(''),
    Investigacao: new FormControl(''),
    Lidar_com_Animais: new FormControl(''),
    Medicina: new FormControl(''),
    Natureza: new FormControl(''),
    Percepcao: new FormControl(''),
    Persuasao: new FormControl(''),
    Prestidigitacao: new FormControl(''),
    Religiao: new FormControl(''),
    Sobrevivencia: new FormControl(''),
  });

  currentCharacterData = {
    Forca: '',
    Destreza: '',
    Constituicao: '',
    Inteligencia: '',
    Sabedoria: '',
    Carisma: '',
    Acrobacia: '',
    Arcanismo: '',
    Atletismo: '',
    Atuacao: '',
    Enganacao: '',
    Furtividade: '',
    História: '',
    Intimidacao: '',
    Intuicao: '',
    Investigacao: '',
    Lidar_com_Animais: '',
    Medicina: '',
    Natureza: '',
    Percepcao: '',
    Persuasao: '',
    Prestidigitacao: '',
    Religiao: '',
    Sobrevivencia: '',
  }
}
