import * as React from "react";
import { Word } from "../store/vocab/types";

interface HelloProps {
  words: Word[];
}

export const Hello = (props: HelloProps) => (
  <ul>
    {props.words.map(word => (
      <li>{word.word}</li>
    ))}
  </ul>
);
