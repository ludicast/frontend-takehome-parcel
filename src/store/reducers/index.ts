import { combineReducers } from "redux";
import { FavoritesState, favoritesReducer } from "./favorites";
import { GemState, gemReducer } from "./gems";
import { SearchState, searchReducer } from "./search";

export interface AppState {
    gems: GemState;
    favorites: FavoritesState;
    search: SearchState;
}

export const reducer = combineReducers({
    gems: gemReducer,
    favorites: favoritesReducer,
    search: searchReducer
});