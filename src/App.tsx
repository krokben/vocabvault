import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "./store";

import { VocabState, Word } from "./store/vocab/types";
import { initWords, addWord, removeWord } from "./store/vocab/actions";

import Vocab from "./components/Vocab";
import Input from "./components/Input";

interface AppProps {
  initWords: typeof initWords;
  addWord: typeof addWord;
  removeWord: typeof removeWord;
  vocab: VocabState;
}

class App extends React.Component<any, AppProps> {
  componentDidMount() {
    this.getVocab();
    this.addWord({ content: "Lorem", created: 2045 });
    this.addWord({ content: "Ipsum", created: 2046 });
    this.addWord({ content: "Dolor", created: 2047 });
    this.removeWord("ipsum");
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

  removeWord = (content: string) => {
    fetch("/vocab", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    })
      .then(() => this.props.removeWord(content))
      .catch(console.error);
  };

  render(): JSX.Element {
    return (
      <main>
        <Vocab words={this.props.vocab.words} />
        <Input
          words={this.props.vocab.words}
          addWord={this.props.addWord}
          removeWord={this.props.removeWord}
        />
      </main>
    );
  }
}

const mapStateToProps = (state: AppState): any => ({
  vocab: state.vocab
});

export default connect(
  mapStateToProps,
  { initWords, addWord, removeWord }
)(App);
