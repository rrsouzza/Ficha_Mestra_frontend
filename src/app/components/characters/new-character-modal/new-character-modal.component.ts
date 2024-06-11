import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharAlinhamentoList, CharClassesList, CharPriorsList, CharRacesList } from '../../../utils/character.utils';

@Component({
  selector: 'app-new-character-modal',
  templateUrl: './new-character-modal.component.html',
  styleUrl: './new-character-modal.component.scss'
})
export class NewCharacterModalComponent {
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  currentPage: 1 | 2 | 3 = 1;

  newChar_1_FormGroup: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    classe: new FormControl('', [Validators.required]),
    raca: new FormControl('', [Validators.required]),
    // Deve ter interface, pois dependendo da escolha pode haver sub-raça
    antecedente: new FormControl('', [Validators.required]),
    // Deve ter interface, opções
    nivel: new FormControl('', [Validators.required, Validators.min(1), Validators.max(20)]),
    // Number, 1 a 20
    alinhamento: new FormControl('', [Validators.required]),
    // Deve ter interface, opções
  });

  newChar_2_FormGroup: FormGroup = new FormGroup({
    // Os dados abaixo serão dos atributos --> Todos recebem Number até 18
    forca: new FormControl('', [Validators.min(-4), Validators.max(18)]),
    destreza: new FormControl('', [Validators.min(-4), Validators.max(18)]),
    constituicao: new FormControl('', [Validators.min(-4), Validators.max(18)]),
    inteligencia: new FormControl('', [Validators.min(-4), Validators.max(18)]),
    sabedoria: new FormControl('', [Validators.min(-4), Validators.max(18)]),
    carisma: new FormControl('', [Validators.min(-4), Validators.max(18)]),
  });

  newChar_3_FormGroup: FormGroup = new FormGroup({
    // Os dados abaixo são as perícias --> Receberão Verdadeiro ou Falso
    acrobacia: new FormControl(false),
    arcanismo: new FormControl(false),
    atletismo: new FormControl(false),
    atuacao: new FormControl(false),
    enganacao: new FormControl(false),
    furtividade: new FormControl(false),
    historia: new FormControl(false),
    intimidacao: new FormControl(false),
    intuicao: new FormControl(false),
    investigacao: new FormControl(false),
    lidar_com_animais: new FormControl(false),
    medicina: new FormControl(false),
    natureza: new FormControl(false),
    percepcao: new FormControl(false),
    persuasao: new FormControl(false),
    prestidigitacao: new FormControl(false),
    religiao: new FormControl(false),
    sobrevivencia: new FormControl(false),
    //
    tracos_de_personalidade: new FormControl(''),
    ideais: new FormControl(''),
    vinculos: new FormControl(''),
    fraquezas: new FormControl(''),
  });

  currentCharacterData = {
    nome: '',
    classe: '',
    raca: '',
    antecedente: '',
    nivel: '',
    alinhamento: '',
    forca: '',
    destreza: '',
    constituicao: '',
    inteligencia: '',
    sabedoria: '',
    carisma: '',
    acrobacia: '',
    arcanismo: '',
    atletismo: '',
    atuacao: '',
    enganacao: '',
    furtividade: '',
    historia: '',
    intimidacao: '',
    intuicao: '',
    investigacao: '',
    lidar_com_animais: '',
    medicina: '',
    natureza: '',
    percepcao: '',
    persuasao: '',
    prestidigitacao: '',
    religiao: '',
    sobrevivencia: '',
  };

  characterClassesList = CharClassesList;

  characterRacesList = CharRacesList;

  characterPriorsList = CharPriorsList;

  characterAlinhamentoList = CharAlinhamentoList;

  get isLastPage() {
    return this.currentPage === 3;
  }

  handleStepClick(action: 'previous' | 'next') {
    if (action === 'previous') {
      this.currentPage--;
    }
    else if (action === 'next') {
      this.currentPage++;
    }
  }
}
