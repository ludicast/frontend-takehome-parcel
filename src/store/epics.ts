import { of } from "rxjs";
import {
  filter,
  switchMap,
  map,
  debounceTime,
  takeUntil,
  catchError
} from "rxjs/operators";
import { fetchGemsAsync } from "./actions";
import { isActionOf } from "typesafe-actions";
import { Gem } from "../models";
import * as _ from "lodash";

const API = "http://localhost:3000/api/v1";
const search = (query: string) =>
  `${API}/search.json?query=${encodeURIComponent(query)}`;
const toGem = (obj: any): Gem =>
  (_.mapKeys(obj, (_value, key) => _.camelCase(key)) as unknown) as Gem;

// TODO: add beter typing
export const fetchGemsFlow = (
  actions$: any,
  _state$: any,
  { getJSON, notify }: any
) =>
  actions$.pipe(
    filter(isActionOf(fetchGemsAsync.request)),
    // in case there is a live preview etc.
    debounceTime(100),
    filter(({ payload }) => payload.trim() !== ""),
    // cancel in-flight requests
    switchMap(({ payload }) =>
      getJSON(search(payload)).pipe(
        map((result: any[]) => fetchGemsAsync.success(result.map(toGem))),
        catchError((error: Error) => {
          const msg = "Error loading gems: " + error.message;
          notify(msg);
          return of(fetchGemsAsync.failure(error));
        }),
        takeUntil(actions$.pipe(filter(isActionOf(fetchGemsAsync.cancel))))
      )
    )
  );

export default [fetchGemsFlow];
