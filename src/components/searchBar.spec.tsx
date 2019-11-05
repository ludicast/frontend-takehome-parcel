import React from "react";
import { fireEvent } from "@testing-library/react";
import { SearchBar } from "./searchBar";
import { renderWithRedux } from "./specHelpers";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

describe("searchBar", () => {
  let container: HTMLElement;
  let input: HTMLElement;
  let history: any;

  beforeEach(() => {
    history = createMemoryHistory();
    const rendered = renderWithRedux(
      <Router history={history}>
        <SearchBar />
      </Router>
    );
    container = rendered.container;
  });

  it("searches when a query is entered", () => {
    const input = container.querySelector(".MuiInputBase-input")!;
    userEvent.type(input, "paperclip");
    fireEvent.blur(input);
    expect(history.location.pathname).toEqual("/gems/paperclip");
  });

  it("does not search when a blank query is entered", () => {
    const input = container.querySelector(".MuiInputBase-input")!;
    fireEvent.blur(input);
    expect(history.location.pathname).toEqual("/");
  });
});
