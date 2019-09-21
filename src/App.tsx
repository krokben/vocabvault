import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "./store";

import { VocabState, Word } from "./store/vocab/types";
import { initWords, addWord } from "./store/vocab/actions";

import { Vocab } from "./components/Vocab";

interface AppProps {
  initWords: typeof initWords;
  addWord: typeof addWord;
  vocab: VocabState;
}

class App extends React.Component<any, AppProps> {
  componentDidMount() {
    this.getVocab();
    this.addWord({ content: "Lorem", created: 2045 });
  }

  getVocab = () => {
    fetch("/vocab")
      .then(response => response.json())
      .then(data => this.props.initWords(data))
      .catch(console.error);
  };

  addWord = (word: Word) => {
    fetch("/vocab", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(word)
    })
      .then(() => this.props.addWord(word))
      .catch(console.error);
  };

  render(): JSX.Element {
    return <Vocab words={this.props.vocab.words} />;
  }
}

const mapStateToProps = (state: AppState): any => ({
  vocab: state.vocab
});

export default connect(
  mapStateToProps,
  { initWords, addWord }
)(App);
