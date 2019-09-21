import {
  VocabState,
  VocabActionTypes,
  INIT_WORDS,
  ADD_WORD,
  REMOVE_WORD
} from "./types";

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
        ...state,
        words: [...state.words, ...action.payload]
      };
    case ADD_WORD:
      return {
        ...state,
        words: [...state.words, action.payload]
      };
    case REMOVE_WORD:
      return {
        ...state,
        words: state.words.length
          ? state.words.filter(
              word =>
                word.content.toLowerCase() !== action.payload.toLowerCase()
            )
          : state.words
      };
    default:
      return state;
  }
}
