import { AppState } from "./app.state";
import { CharacterState } from "./character/character.state";
import { UserState } from "./user/user.state";

export const userSelector = (state: AppState): UserState => state.user;

export const characterSelector = (state: AppState): CharacterState => state.character;
