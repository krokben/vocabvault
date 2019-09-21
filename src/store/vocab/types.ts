export interface Word {
  content: string;
  created: number;
}

export interface VocabState {
  words: Word[];
}

export const INIT_WORDS = "INIT_WORDS";
export const ADD_WORD = "ADD_WORD";
export const REMOVE_WORD = "REMOVE_WORD";

interface InitWordsAction {
  type: typeof INIT_WORDS;
  payload: Word[];
}

interface AddWordAction {
  type: typeof ADD_WORD;
  payload: Word;
}

interface RemoveWordAction {
  type: typeof REMOVE_WORD;
  payload: string;
}

export type VocabActionTypes =
  | InitWordsAction
  | AddWordAction
  | RemoveWordAction;
