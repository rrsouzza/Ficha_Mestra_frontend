import { UserActions, UserTypesActions } from "./user.actions";
import { UserState, initialState } from "./user.state";

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserTypesActions.SET_USER: {
      return {
        ...state,
        id: action.payload.id || state.id,
        name: action.payload.name || state.name,
        email: action.payload.email || state.email,
      };
    };

    case UserTypesActions.UPDATE_USER: {
      return {
        ...state,
        id: action.payload.id || state.id,
        name: action.payload.name || state.name,
        email: action.payload.email || state.email,
      };
    };

    default:
      return state;
  }
}
