export interface Word {
  content: string;
  created: number;
}

export interface VocabState {
  words: Word[];
}

export const INIT_WORDS = "INIT_WORDS";
export const ADD_WORD = "ADD_WORD";

interface InitWordsAction {
  type: typeof INIT_WORDS;
  payload: Word[];
}

interface AddWordAction {
  type: typeof ADD_WORD;
  payload: Word;
}

export type VocabActionTypes = InitWordsAction | AddWordAction;
