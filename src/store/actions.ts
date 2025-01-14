import { createAsyncAction, createAction } from 'typesafe-actions';
import { Gem } from "../models/gem"

export const fetchGemsAsync = createAsyncAction(
  'FETCH_GEMS_REQUEST',
  'FETCH_GEMS_SUCCESS',
  'FETCH_GEMS_FAILURE',
  'FETCH_GEMS_CANCEL'
)<string, Gem[], Error, string>();

export const favorite = createAction("FAVORITE")<Gem>();
export const unfavorite = createAction("UNFAVORITE")<Gem>();