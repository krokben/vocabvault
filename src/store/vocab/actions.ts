import { Word, INIT_WORDS, ADD_WORD, VocabActionTypes } from "./types";

export function initWords(words: Word[]): VocabActionTypes {
  return {
    type: INIT_WORDS,
    payload: words
  };
}

export function addWord(word: Word): VocabActionTypes {
  return {
    type: ADD_WORD,
    payload: word
  };
}
