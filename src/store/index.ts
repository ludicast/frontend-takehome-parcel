import {createStore, compose, applyMiddleware } from "redux";
import { of } from "rxjs";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineEpics, createEpicMiddleware } from "redux-observable"

import { reducer } from "./reducers";
import epics from "./epics";
import { ajax } from "rxjs/ajax";

const persistConfig = {
  key: 'faveKey',
  storage,
  whitelist: ['favorites'] 
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const configureStore = () => {
    const rootEpic = combineEpics(...epics);
    const epicMiddleware = createEpicMiddleware({
        dependencies: { getJSON: ajax.getJSON }
    });

    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
    const persistor = persistStore(store)
    epicMiddleware.run(rootEpic);
    return {store, persistor};
};