import { Character } from "../../interface/character.interface";

export interface CharacterState {
  charactersList: Array<Character>;
}

export const initialState: CharacterState = {
  charactersList: [],
};
