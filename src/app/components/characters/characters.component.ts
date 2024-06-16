import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { LoadCharacterList } from '../../store/character/character.actions';
import { characterList } from '../../store/character/character.selectors';
import { Character } from '../../interface/character.interface';
import { AppStatus } from '../../interface/app.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {
  characterList: Array<Character> = [];

  isCreateCharacterModalVisible: boolean = false;

  appStatus: AppStatus = AppStatus.EMPTY;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.appStatus = AppStatus.LOADING;
    this.store.select(characterList).subscribe({
      next: (res) => {
        this.characterList = res;
        this.appStatus = AppStatus.SUCCESS;
      },
      error: (err) => {
        console.error('Ocorreu um erro ao carregar os personagens: \n', err);
        this.appStatus = AppStatus.ERROR;
      },
    });
  }
}
