import { createStore, combineReducers } from "redux";
import { vocabReducer } from "./vocab/reducers";

const rootReducer = combineReducers({
  vocab: vocabReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer);
}
