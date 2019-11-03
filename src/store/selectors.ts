import { createSelector } from "reselect";
import { GemState, AppState, FavoritesState } from "./reducers";

const gemStateSelector = (state: AppState) => state.gems;
const favoritesStateSelector = (state: AppState) => state.favorites;

export const currentGemList  = createSelector(
    gemStateSelector,
    (gemState: GemState) => Array.from(gemState.gems.values())
);

export const currentFavoritesList  = createSelector(
    favoritesStateSelector,
    (favoritesState: FavoritesState) => [...favoritesState]
);

export const areGemsLoading  = createSelector(
    gemStateSelector,
    (gemState: GemState) => gemState.loadingList
);