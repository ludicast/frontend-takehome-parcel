import { reducer } from "./reducers";
import {createStore, compose, applyMiddleware } from "redux";
console.log(reducer);

export const initializeStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware()))
};