import { createSelector } from "@ngrx/store";
import { characterSelector } from "../app.selectors";

export const characterList = createSelector(characterSelector, (characters) => characters.charactersList);
