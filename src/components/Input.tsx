import * as React from "react";
import { Word } from "../store/vocab/types";

interface InputProps {
  words: Word[];
  addWord: (word: Word) => void;
  removeWord: (content: string) => void;
}

class Input extends React.Component<InputProps> {
  reactToInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.target.word.value === "") {
      return;
    }

    this.props.words.find(
      word =>
        word.content.toLowerCase() === event.target.word.value.toLowerCase()
    )
      ? this.props.removeWord(event.target.word.value)
      : this.props.addWord({
          content: event.target.word.value,
          created: new Date().getTime()
        });
  };

  render() {
    return (
      <form onSubmit={event => this.reactToInput(event)}>
        <input name="word" type="text" />
      </form>
    );
  }
}

export default Input;
