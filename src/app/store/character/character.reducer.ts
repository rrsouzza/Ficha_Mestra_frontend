import { CharacterActions, CharacterTypesActions } from "./character.actions";
import { CharacterState, initialState } from "./character.state";

export function reducer(state = initialState, action: CharacterActions): CharacterState {
  switch (action.type) {
    case CharacterTypesActions.SET_CHARACTER_LIST: {
      const { characterList } = (action as any).payload;

      return {
        ...state,
        charactersList: characterList || state.charactersList,
      };
    };

    case CharacterTypesActions.UPDATE_CHARACTER: {
      const { data } = (action as any).payload;

      const charIdx = state.charactersList.findIndex((ch) => ch.id === data.id);
      if (charIdx > -1) {
        state.charactersList[charIdx] = data;
      }

      return {
        ...state,
        charactersList: state.charactersList,
      };
    }

    case CharacterTypesActions.SELECT_CHARACTER: {
      const { data } = (action as any).payload;

      if (data && data.id) {
        const selectedChar = state.charactersList.find((ch) => ch.id === data.id);
        if (selectedChar) {
          return {
            ...state,
            selectedCharacter: selectedChar,
          };
        }
      }

      return {
        ...state,
        selectedCharacter: undefined,
      };
    }

    case CharacterTypesActions.REMOVE_CHARACTER: {
      const { data } = (action as any).payload;

      if (data && data.id) {
        return {
          ...state,
          charactersList: state.charactersList.filter((ch) => ch.id !== data.id),
        };
      }

      return {
        ...state,
        charactersList: state.charactersList,
      };
    }

    default:
      return state;
  }
}
