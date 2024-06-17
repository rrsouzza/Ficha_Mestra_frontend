import { Component, EventEmitter, OnDestroy, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { RemoveCharacter, SelectCharacter } from '../../../store/character/character.actions';
import { characterList } from '../../../store/character/character.selectors';
import { Character } from '../../../interface/character.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../common/dialog/dialog.component';
import { CharacterService } from '../../../services/character/character.service';
import { SnackbarService } from '../../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss'
})
export class CharacterDetailComponent implements OnDestroy {
  selectedChar?: Character;

  isEditCharacterModalVisible: boolean = false;

  readonly dialog = inject(MatDialog);

  dialogRef!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private characterService: CharacterService,
    private snackbarService: SnackbarService,
  ) {
    const characterId = this.route.snapshot.params['id'];
    this.store.select(characterList).subscribe({
      next: (res: Array<Character>) => {
        const selChar = res.find((ch) => ch.id === characterId);
        if (selChar) this.selectedChar = selChar;
        this.store.dispatch(new SelectCharacter({ data: { id: characterId }}));
      },
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(new SelectCharacter({ data: undefined }));
  }

  handleSaveEditedChar(editedChar: Character) {
    this.selectedChar = editedChar;
    this.isEditCharacterModalVisible = false;
    this.snackbarService.openSnackbar('Personagem salvo com sucesso', 'Fechar', 5000);
  }

  handleDeleteCharClick() {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'Excluir',
        message: 'Tem certeza que gostaria de excluir esse personagem?',
      },
    });

    this.dialogRef.afterClosed().subscribe({
      next: (confirmed: boolean) => {
        if (confirmed && this.selectedChar && this.selectedChar.id) {
          this.characterService.deleteCharacter(this.selectedChar.id).subscribe({
            next: () => {
              this.store.dispatch(new RemoveCharacter({ data: { id: this.selectedChar?.id } }));
              this.snackbarService.openSnackbar('Personagem excluído com sucesso', 'Fechar', 3500).subscribe(() => this.routerNavigate('/characters'));
            },
          });
        }
      },
    });
  }

  routerNavigate(path: string) {
    this.router.navigate([path]);
  }
}
