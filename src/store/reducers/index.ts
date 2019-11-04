import { combineReducers } from "redux";
import { FavoritesState, favoritesReducer } from "./favorites";
import { GemState, gemReducer } from "./gems";

export interface AppState {
    gems: GemState;
    favorites: FavoritesState;
}

export const reducer = combineReducers({
    gems: gemReducer,
    favorites: favoritesReducer,
});