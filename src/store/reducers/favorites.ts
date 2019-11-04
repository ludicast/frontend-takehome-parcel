import { favorite, unfavorite } from "../actions"
import { createReducer } from "typesafe-actions";
import { Gem } from "../../models";
import * as _ from "lodash";

export type FavoritesState = {[name: string]: Gem};

export const initialFavoritesState: FavoritesState = {};

export const favoritesReducer = createReducer(initialFavoritesState)
    .handleAction(favorite, (state: FavoritesState, {payload}: {payload: Gem}) => {
        return {...state, [payload.name]: payload};
    })
    .handleAction(unfavorite, (state: FavoritesState, {payload}: {payload: Gem}) =>
        _.omit(state, payload.name)
    );