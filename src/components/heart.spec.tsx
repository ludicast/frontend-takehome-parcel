import "@testing-library/jest-dom/extend-expect";
import * as React from "react";
import { fireEvent } from "@testing-library/react";
import { Heart } from "./heart";
import { Gem } from "../models";
import { renderWithRedux } from "./specHelpers";

describe("heart", () => {
  describe("a favorited gem", () => {
    let container: HTMLElement;
    beforeEach(() => {
      const gem = { name: "capybara" } as Gem;
      container = renderWithRedux(<Heart gem={gem} />).container;
    });

    it("shows the filled heart", () => {
      expect(container.querySelector(".favorited")).toBeTruthy();
    });

    it("toggles on click", () => {
      fireEvent.click(container.querySelector(".favorited")!);
      expect(container.querySelector(".favorited")).toBeFalsy();
      expect(container.querySelector(".not-favorited")).toBeTruthy();
    });
  });

  describe("a not-favorited gem", () => {
    let container: HTMLElement;
    beforeEach(() => {
      const gem = { name: "not_my_favorite" } as Gem;
      container = renderWithRedux(<Heart gem={gem} />).container;
    });

    it("shows the outlined heart", () => {
      expect(container.querySelector(".not-favorited")).toBeTruthy();
    });

    it("toggles on click", () => {
      fireEvent.click(container.querySelector(".not-favorited")!);
      expect(container.querySelector(".not-favorited")).toBeFalsy();
      expect(container.querySelector(".favorited")).toBeTruthy();
    });
  });
});
