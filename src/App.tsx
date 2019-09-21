import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "./store";

import { VocabState } from "./store/vocab/types";
import { initWords } from "./store/vocab/actions";

import { Hello } from "./components/Hello";

interface AppProps {
  initWords: typeof initWords;
  vocab: VocabState;
}

class App extends React.Component<any, AppProps> {
  componentDidMount() {
    this.getVocab();
  }

  getVocab = () => {
    fetch("/vocab")
      .then(response => response.json())
      .then(data => this.props.initWords(data));
  };

  render(): JSX.Element {
    return <Hello words={this.props.vocab.words} />;
  }
}

const mapStateToProps = (state: AppState): any => ({
  vocab: state.vocab
});

export default connect(
  mapStateToProps,
  { initWords }
)(App);
