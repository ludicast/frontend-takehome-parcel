import * as React from "react";

import { render } from "@testing-library/react";

import { createStore } from "redux";
import { populatedState } from "../store/store.fixtures";
import { reducer } from "../store/reducers";
import { Provider } from "react-redux";

export const renderWithRedux = (
  ui: any,
  { store = createStore(reducer, populatedState) } = {}
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store
});
