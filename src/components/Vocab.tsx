import * as React from "react";
import { Word } from "../store/vocab/types";

interface VocabProps {
  words: Word[];
}

const Vocab = (props: VocabProps) => (
  <ul>
    {props.words.map(word => (
      <li key={`word_${word.created}`}>{word.content}</li>
    ))}
  </ul>
);

export default Vocab;
