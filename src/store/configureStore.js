import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reduxEntries from "../reducers/entries.reducer";
const ConfigureStore = () => {
  return createStore(
    combineReducers({
      entries: reduxEntries,
    }),
    composeWithDevTools()
  );
};
export default ConfigureStore;
