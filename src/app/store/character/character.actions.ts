import { Action } from "@ngrx/store";
import { Character } from "../../interface/character.interface";

interface Payload {
  data?: any;
  characterList?: Array<Character>;
}

export enum CharacterTypesActions {
  LOAD_CHARACTER_LIST = '[Character] Load Character List',
  SET_CHARACTER_LIST = '[Character] Set Character List',
}

export class LoadCharacterList implements Action {
  readonly type: string = CharacterTypesActions.LOAD_CHARACTER_LIST;
}

export class SetCharacterList implements Action {
  readonly type: string = CharacterTypesActions.SET_CHARACTER_LIST;

  constructor(public payload: Payload) { }
}

export type CharacterActions =
  LoadCharacterList |
  SetCharacterList;
