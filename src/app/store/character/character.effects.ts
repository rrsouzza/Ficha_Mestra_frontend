import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { EMPTY, Observable, catchError, map, mergeMap, withLatestFrom } from "rxjs";
import { Actions, CreateEffectMetadata, createEffect, ofType } from "@ngrx/effects";
import { CharacterTypesActions } from "./character.actions";
import { AppState } from "../app.state";
import { userId } from "../user/user.selectors";
import { CharacterService } from "../../services/character/character.service";

export interface ActionPayload extends Actions {
  payload?: any;
}

@Injectable()
export class CharacterEffects {
  loadCharacters$: Observable<Action> & CreateEffectMetadata;

  constructor(
    private action$: Actions,
    private store$: Store<AppState>,
    private characterService: CharacterService,
  ) {
    this.loadCharacters$ = createEffect(() =>
      this.action$.pipe(
        ofType(CharacterTypesActions.LOAD_CHARACTER_LIST),
        withLatestFrom(this.store$.select(userId)),
        mergeMap(
          ([action, user_id]: [ActionPayload, string]): Observable<Action> =>
            this.characterService.getCharactersListByUserId(user_id).pipe(
              map((res) => ({
                type: CharacterTypesActions.SET_CHARACTER_LIST,
                payload: { data: res },
              })),
              catchError(() => EMPTY),
            ),
        ),
      )
    )
  }
}
