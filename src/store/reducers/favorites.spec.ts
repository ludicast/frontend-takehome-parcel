import {favoritesReducer, initialFavoritesState } from "./favorites";
import { favorite, unfavorite } from "../actions";
import { Gem } from "~models";

describe("favorites reducer", () => {
    it("ignores unknown actions", () => {
        const state = favoritesReducer(initialFavoritesState, {type: "UNKNOWN"});
        expect(state).toEqual({});
    });

    describe("favorite action", () => {
        it("adds a favorite", () => {
            const state = favoritesReducer(initialFavoritesState, favorite({name: "cucumber"} as Gem));
            expect(state).toEqual({cucumber: {name: "cucumber"}});
        });

        it("updates a favorite", () => {
            const state = favoritesReducer(initialFavoritesState, favorite({name: "cucumber"} as Gem));
            const newState = favoritesReducer(
                state,
                favorite({name: "cucumber", homepageUri: "here.com"} as Gem)
             );
            expect(newState).toEqual({
                cucumber: {name: "cucumber", homepageUri: "here.com"}
            });
        });
    });
    
    describe("unfavorite action", () => {
        it("removes a favorite", () => {
            const state = favoritesReducer(initialFavoritesState, favorite(
                {name: "cucumber"} as Gem
            ));
            const newState = favoritesReducer(state, favorite(
                {name: "capybara"} as Gem
            ));
            const newestState = favoritesReducer(newState, unfavorite(
                {name: "cucumber"} as Gem
            ));
            expect(newestState).toEqual({capybara: {name: "capybara"}});
        });

       it("gracefully ignores an unknown removal", () => {
            const state = favoritesReducer(initialFavoritesState, favorite(
                {name: "cucumber"} as Gem
            ));
            const newState = favoritesReducer(state, unfavorite(
                {name: "capybara"} as Gem
            ));
            expect(newState).toEqual({cucumber: {name: "cucumber"}});
        });
    });
});