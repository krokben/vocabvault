import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "./store";

import { VocabState } from "./store/vocab/types";
import { sendMessage } from "./store/vocab/actions";

import { Hello } from "./components/Hello";

interface AppProps {
  sendMessage: typeof sendMessage;
  vocab: VocabState;
}

class App extends React.Component<any, AppProps> {
  render(): JSX.Element {
    return (
      <Hello
        sendMessage={this.props.sendMessage}
        messages={this.props.vocab.messages}
      />
    );
  }
}

const mapStateToProps = (state: AppState): any => ({
  vocab: state.vocab
});

export default connect(
  mapStateToProps,
  { sendMessage }
)(App);
