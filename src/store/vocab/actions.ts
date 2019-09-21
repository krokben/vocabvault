import { Word, INIT_WORDS, VocabActionTypes } from "./types";

export function initWords(words: Word[]): VocabActionTypes {
  return {
    type: INIT_WORDS,
    payload: words
  };
}
