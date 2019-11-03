import { favorite, unfavorite } from "../actions"
import { createReducer } from "typesafe-actions";

export type FavoritesState = string[];

export const initialFavoritesState: FavoritesState = [];

export const favoritesReducer = createReducer(initialFavoritesState)
    .handleAction(favorite, (state: FavoritesState, {payload}: {payload: string}) => {
        if (state.indexOf(payload) > -1) {
            return state;
        }
        return [...state, payload];
    })
    .handleAction(unfavorite, (state:FavoritesState, {payload}: {payload: string}) =>
        state.filter(name => name !== payload)
    );