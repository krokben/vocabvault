import { VocabState, VocabActionTypes, INIT_WORDS } from "./types";

const initialState: VocabState = {
  words: []
};

export function vocabReducer(
  state = initialState,
  action: VocabActionTypes
): VocabState {
  switch (action.type) {
    case INIT_WORDS:
      return {
        words: [...state.words, ...action.payload]
      };
    default:
      return state;
  }
}
