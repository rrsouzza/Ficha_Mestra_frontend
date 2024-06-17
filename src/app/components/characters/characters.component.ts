import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { SetCharacterList, UpdateCharacter } from '../../store/character/character.actions';
import { characterList } from '../../store/character/character.selectors';
import { Character } from '../../interface/character.interface';
import { AppStatus } from '../../interface/app.interface';
import { Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {
  charList: Array<Character> = [];

  isCreateCharacterModalVisible: boolean = false;

  appStatus: AppStatus = AppStatus.EMPTY;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit() {
    this.appStatus = AppStatus.LOADING;
    this.store.select(characterList).subscribe({
      next: (res) => {
        this.charList = res;
        this.appStatus = AppStatus.SUCCESS;
        console.log('this.charList: ', this.charList);
      },
      error: (err) => {
        console.error('Ocorreu um erro ao carregar os personagens: \n', err);
        this.appStatus = AppStatus.ERROR;
      },
    });
  }

  handleNewCharCreated(newChar: Character) {
    this.appStatus = AppStatus.LOADING;
    const existingChar = this.charList.find((ch) => ch.id === newChar.id);

    if (existingChar) {
      // Já existe um personagem com esse id, então o mesmo foi salvo e precisa só substituir na lista
      this.store.dispatch(new UpdateCharacter({ data: newChar }));
    } else {
      // O personagem é novo e precisa adicioná-lo à lista
      const newList = [...this.charList, newChar];
      this.store.dispatch(new SetCharacterList({ characterList: newList }));
    }

    this.isCreateCharacterModalVisible = false;
    this.appStatus = AppStatus.SUCCESS;
    this.snackbarService.openSnackbar('Personagem criado com sucesso', 'Fechar', 5000);
  }

  handleSelectCharacter(char: Character) {
    this.router.navigate([`/characters/${char.id}`]);
  }
}
