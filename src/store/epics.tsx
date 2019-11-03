import { from } from "rxjs";
import { ajax } from "rxjs/ajax";
import { filter, switchMap } from "rxjs/operators";
import {Epic} from "redux-observable"
import { fetchGemsAsync } from './actions';
import { isActionOf } from "typesafe-actions";


export const fetchGemsFlow = () => {}
/*
const fetchGemsFlow = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(fetchGemsAsync.request)),
    switchMap(action =>
      from(gemsApi.getAll(action.payload)).pipe(
        map(fetchTodosAsync.success),
        catchError((message: string) => of(fetchTodosAsync.failure(message))),
        takeUntil(action$.pipe(filter(isActionOf(fetchTodosAsync.cancel)))),
      )
    );
    */