import { createReducer, getType } from "typesafe-actions";
import { Gem } from "../models"
import { fetchGemsAsync, favorite, unfavorite } from "./actions"
import { combineReducers } from "redux";

export interface GemState {
    gems: Map<string, Gem>;
    loadingList: boolean;
}

export type FavoritesState = string[];
export type SearchState = string | undefined;

export interface AppState {
    gems: GemState;
    favorites: FavoritesState;
    search: SearchState;
}

const initialGemState: GemState = {gems: new Map(), loadingList: false};
const initialFavoritesState: FavoritesState = [];

const assignAll = (gems: Gem[]) =>
    new Map(gems.map(gem => [gem.name, gem]))

export const favoritesReducer = createReducer<FavoritesState, any>(initialFavoritesState).handleAction(favorite, (state, {payload}) => {
    if (state.indexOf(payload) > -1) {
        return state;
    }
    return [...state, payload];
}).handleAction(unfavorite, (state, {payload}) =>
    state.filter(name => name !== payload)
);
export const gemReducer = createReducer<GemState, any>(initialGemState).handleAction(
    fetchGemsAsync.success, (state, action) => ({ 
        ...state,
        gems: assignAll(action.payload),
        loadingList: false
    }));

export const reducer = combineReducers({gems: gemReducer, favorites: favoritesReducer});