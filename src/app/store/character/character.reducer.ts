import { CharacterActions, CharacterTypesActions } from "./character.actions";
import { CharacterState, initialState } from "./character.state";

export function reducer(state = initialState, action: CharacterActions): CharacterState {
  switch (action.type) {
    case CharacterTypesActions.SET_CHARACTER_LIST: {
      const { data } = action.payload;

      return {
        ...state,
        charactersList: data.charactersList || state.charactersList,
      };
    };

    default:
      return state;
  }
}
