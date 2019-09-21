export interface Word {
  content: string;
  created: number;
}

export interface VocabState {
  words: Word[];
}

export const INIT_WORDS = "INIT_WORDS";

interface InitWordAction {
  type: typeof INIT_WORDS;
  payload: Word[];
}

export type VocabActionTypes = InitWordAction;
