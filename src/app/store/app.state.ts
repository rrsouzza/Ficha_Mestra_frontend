import { CharacterState } from "./character/character.state";
import { UserState } from "./user/user.state";

export interface AppState {
  user: UserState;
  character: CharacterState;
}
