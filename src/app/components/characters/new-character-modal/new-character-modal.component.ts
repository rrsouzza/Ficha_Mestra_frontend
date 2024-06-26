import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharAlinhamentoList, CharClassesList, CharPriorsList, CharRacesList } from '../../../utils/character.utils';
import { Character } from '../../../interface/character.interface';
import { CharacterService } from '../../../services/character/character.service';
import { userId } from '../../../store/user/user.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';

@Component({
  selector: 'app-new-character-modal',
  templateUrl: './new-character-modal.component.html',
  styleUrl: './new-character-modal.component.scss'
})
export class NewCharacterModalComponent implements OnChanges {
  @Input() characterToEdit?: Character;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  @Output() saveNewChar: EventEmitter<Character> = new EventEmitter<Character>();

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
    forca: new FormControl('', [Validators.required, Validators.min(-4), Validators.max(18)]),
    destreza: new FormControl('', [Validators.required, Validators.min(-4), Validators.max(18)]),
    constituicao: new FormControl('', [Validators.required, Validators.min(-4), Validators.max(18)]),
    inteligencia: new FormControl('', [Validators.required, Validators.min(-4), Validators.max(18)]),
    sabedoria: new FormControl('', [Validators.required, Validators.min(-4), Validators.max(18)]),
    carisma: new FormControl('', [Validators.required, Validators.min(-4), Validators.max(18)]),
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
    nivel: 0,
    alinhamento: '',
    atributos: {
      forca: 0,
      destreza: 0,
      constituicao: 0,
      inteligencia: 0,
      sabedoria: 0,
      carisma: 0,
    },
    pericias: {
      acrobacia: false,
      arcanismo: false,
      atletismo: false,
      atuacao: false,
      enganacao: false,
      furtividade: false,
      historia: false,
      intimidacao: false,
      intuicao: false,
      investigacao: false,
      lidar_com_animais: false,
      medicina: false,
      natureza: false,
      percepcao: false,
      persuasao: false,
      prestidigitacao: false,
      religiao: false,
      sobrevivencia: false,
    },
  };

  characterClassesList = CharClassesList;

  characterRacesList = CharRacesList;

  characterPriorsList = CharPriorsList;

  characterAlinhamentoList = CharAlinhamentoList;

  get isLastPage() {
    return this.currentPage === 3;
  }

  constructor(
    private characterService: CharacterService,
    private store: Store<AppState>,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['characterToEdit'] && this.characterToEdit) {
      this.currentCharacterData = {
        ...this.characterToEdit,
        atributos: { ...this.characterToEdit.atributos },
        pericias: { ...this.characterToEdit.pericias },
      };

      this.newChar_1_FormGroup.setValue({
        nome: this.characterToEdit.nome,
        classe: this.characterToEdit.classe,
        raca: this.characterToEdit.raca,
        antecedente: this.characterToEdit.antecedente,
        nivel: this.characterToEdit.nivel,
        alinhamento: this.characterToEdit.alinhamento,
      });

      this.newChar_2_FormGroup.setValue({
        forca: this.characterToEdit.atributos.forca,
        destreza: this.characterToEdit.atributos.destreza,
        constituicao: this.characterToEdit.atributos.constituicao,
        inteligencia: this.characterToEdit.atributos.inteligencia,
        sabedoria: this.characterToEdit.atributos.sabedoria,
        carisma: this.characterToEdit.atributos.carisma,
      });

      this.newChar_3_FormGroup.setValue({
        acrobacia: this.characterToEdit.pericias.acrobacia,
        arcanismo: this.characterToEdit.pericias.arcanismo,
        atletismo: this.characterToEdit.pericias.atletismo,
        atuacao: this.characterToEdit.pericias.atuacao,
        enganacao: this.characterToEdit.pericias.enganacao,
        furtividade: this.characterToEdit.pericias.furtividade,
        historia: this.characterToEdit.pericias.historia,
        intimidacao: this.characterToEdit.pericias.intimidacao,
        intuicao: this.characterToEdit.pericias.intuicao,
        investigacao: this.characterToEdit.pericias.investigacao,
        lidar_com_animais: this.characterToEdit.pericias.lidar_com_animais,
        medicina: this.characterToEdit.pericias.medicina,
        natureza: this.characterToEdit.pericias.natureza,
        percepcao: this.characterToEdit.pericias.percepcao,
        persuasao: this.characterToEdit.pericias.persuasao,
        prestidigitacao: this.characterToEdit.pericias.prestidigitacao,
        religiao: this.characterToEdit.pericias.religiao,
        sobrevivencia: this.characterToEdit.pericias.sobrevivencia,
        tracos_de_personalidade: this.characterToEdit.pericias.tracos_de_personalidade,
        ideais: this.characterToEdit.pericias.ideais,
        vinculos: this.characterToEdit.pericias.vinculos,
        fraquezas: this.characterToEdit.pericias.fraquezas,
      })
    }
  }

  handleStepClick(action: 'previous' | 'next') {
    if (action === 'previous') {
      this.currentPage--;
    } else if (action === 'next') {
      if (this.isLastPage) {
        this.handleSaveCharacter();
      } else {
        this.currentPage++;
      }
    }
  }

  handleSaveCharacter() {
    if (
      this.newChar_1_FormGroup.valid &&
      this.newChar_2_FormGroup.valid &&
      this.newChar_3_FormGroup.valid
    ) {
      const form1Value = this.newChar_1_FormGroup.value;
      const form2Value = this.newChar_2_FormGroup.value;
      const form3Value = this.newChar_3_FormGroup.value;

      const char: Character = {
        nome: form1Value.nome,
        classe: form1Value.classe,
        raca: form1Value.raca,
        antecedente: form1Value.antecedente,
        nivel: form1Value.nivel,
        alinhamento: form1Value.alinhamento,
        atributos: {
          forca: form2Value.forca,
          destreza: form2Value.destreza,
          constituicao: form2Value.constituicao,
          inteligencia: form2Value.inteligencia,
          sabedoria: form2Value.sabedoria,
          carisma: form2Value.carisma,
        },
        pericias: {
          acrobacia: form3Value.acrobacia || false,
          arcanismo: form3Value.arcanismo || false,
          atletismo: form3Value.atletismo || false,
          atuacao: form3Value.atuacao || false,
          enganacao: form3Value.enganacao || false,
          furtividade: form3Value.furtividade || false,
          historia: form3Value.historia || false,
          intimidacao: form3Value.intimidacao || false,
          intuicao: form3Value.intuicao || false,
          investigacao: form3Value.investigacao || false,
          lidar_com_animais: form3Value.lidar_com_animais || false,
          medicina: form3Value.medicina || false,
          natureza: form3Value.natureza || false,
          percepcao: form3Value.percepcao || false,
          persuasao: form3Value.persuasao || false,
          prestidigitacao: form3Value.prestidigitacao || false,
          religiao: form3Value.religiao || false,
          sobrevivencia: form3Value.sobrevivencia || false,
          tracos_de_personalidade: form3Value.tracos_de_personalidade || '',
          ideais: form3Value.ideais || '',
          vinculos: form3Value.vinculos || '',
          fraquezas: form3Value.fraquezas || '',
        },
      };

      this.store.select(userId).subscribe({
        next: (usrId) => {
          this.characterService.saveCharacter(char, usrId, this.characterToEdit?.id)
          .subscribe({
            next: (res) => {
              const newChar = res.data;
              delete newChar.user;
              this.saveNewChar.emit(newChar);
            },
            error: (err) => {
              console.error('Ocorreu um erro ao tentar salvar o personagem: \n', err);
            },
          });
        },
      });
    }
  }
}
