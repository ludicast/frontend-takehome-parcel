import { createSelector } from "reselect";
import { AppState } from "./reducers";
import { GemState } from "./reducers/gems";
import { FavoritesState } from "./reducers/favorites";

const gemStateSelector = (state: AppState) => state.gems;
const favoritesStateSelector = (state: AppState) => state.favorites;

export const currentGemList  = createSelector(
    gemStateSelector,
    (gemState: GemState) => Array.from(gemState.gems.values())
);

export const currentFavoriteNames = createSelector(
    favoritesStateSelector,
    (favoritesState: FavoritesState) => Object.keys(favoritesState)
);

export const currentFavoriteGems = createSelector(
    favoritesStateSelector,
    (favoritesState: FavoritesState) => {
        const names = [...Object.keys(favoritesState)].sort();
        return names.map(name => favoritesState[name]);
    }
);

export const areGemsLoading  = createSelector(
    gemStateSelector,
    (gemState: GemState) => gemState.loadingList
);