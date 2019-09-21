import {
  Word,
  INIT_WORDS,
  ADD_WORD,
  REMOVE_WORD,
  VocabActionTypes
} from "./types";

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

export function removeWord(content: string): VocabActionTypes {
  return {
    type: REMOVE_WORD,
    payload: content
  };
}
