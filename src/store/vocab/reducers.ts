import { VocabState, VocabActionTypes, SEND_MESSAGE } from "./types";

const initialState: VocabState = {
  messages: []
};

export function vocabReducer(
  state = initialState,
  action: VocabActionTypes
): VocabState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
  }
}
