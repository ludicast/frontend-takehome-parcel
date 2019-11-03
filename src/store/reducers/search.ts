import { favorite, unfavorite } from "../actions"
import { createReducer } from "typesafe-actions";

export type SearchState = string;

export const searchReducer = createReducer("");