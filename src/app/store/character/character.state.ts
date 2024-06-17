import { Character } from "../../interface/character.interface";

export interface CharacterState {
  charactersList: Array<Character>;
  selectedCharacter?: Character;
}

export const initialState: CharacterState = {
  charactersList: [],
  selectedCharacter: undefined,
};
