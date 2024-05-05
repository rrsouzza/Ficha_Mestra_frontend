import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import * as fromUserReducer from "./user/user.reducer";
import * as fromCharacterReducer from "./character/character.reducer";

export const reducers: ActionReducerMap<AppState, any> = {
  user: fromUserReducer.reducer,
  character: fromCharacterReducer.reducer,
};
