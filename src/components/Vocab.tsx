import * as React from "react";
import { Word } from "../store/vocab/types";

interface VocabProps {
  words: Word[];
}

export const Vocab = (props: VocabProps) => (
  <ul>
    {props.words.map(word => (
      <li>{word.content}</li>
    ))}
  </ul>
);
