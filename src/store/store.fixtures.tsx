import { AppState } from "./reducers";
import { Gem } from "../models";
import { initialFavoritesState } from "./reducers/favorites";
import { initialGemState } from "./reducers/gems";

export const initialState: AppState = {
  favorites: initialFavoritesState,
  gems: initialGemState
};

export const populatedState: AppState = {
  favorites: { capybara: { name: "capybara" } as Gem },
  gems: {
    gems: new Map([
      ["capybara", { name: "capybara" } as Gem],
      ["cucumber", { name: "cucumber" } as Gem]
    ]),
    loadingList: true
  }
};
