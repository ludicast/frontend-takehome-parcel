import {createStore, compose, applyMiddleware } from "redux";
import { of } from "rxjs";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { combineEpics, createEpicMiddleware } from "redux-observable"

import { reducer } from "./reducers";

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'] 
}
const persistedReducer = persistReducer(persistConfig, reducer);

const epic1 = () => of({type: "SET_NAME", payload: "Salty"});

export const configureStore = () => {
    const rootEpic = combineEpics(epic1);
    const epicMiddleware = createEpicMiddleware();

    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
    const persistor = persistStore(store)
    epicMiddleware.run(rootEpic);
    return {store, persistor};
};