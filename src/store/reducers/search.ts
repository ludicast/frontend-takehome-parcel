import { favorite, unfavorite } from "../actions"
import { createReducer } from "typesafe-actions";

export type SearchState = string | undefined;

export const searchReducer = createReducer(undefined);