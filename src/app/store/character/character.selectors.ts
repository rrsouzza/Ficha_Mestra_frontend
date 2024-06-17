import { createSelector } from "@ngrx/store";
import { characterSelector } from "../app.selectors";

export const characterList = createSelector(characterSelector, (characters) => characters.charactersList);

export const selectedCharacter = createSelector(characterSelector, (state) => state.selectedCharacter);
