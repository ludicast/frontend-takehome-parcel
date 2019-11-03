import {favoritesReducer, initialFavoritesState } from "./favorites";
import { favorite, unfavorite } from "../actions";

describe("favorites reducer", () => {
    it("ignores unknown actions", () => {
        const state = favoritesReducer(initialFavoritesState, {type: "UNKNOWN"});
        expect(state).toEqual([]);
    });

    describe("favorite action", () => {
        it("adds a favorite", () => {
            const state = favoritesReducer(initialFavoritesState, favorite("cucumber"));
            expect(state).toEqual(["cucumber"]);
        });

        it("doesn't double-add a favorite", () => {
            const state = favoritesReducer(initialFavoritesState, favorite("cucumber"));
            const newState = favoritesReducer(state, favorite("cucumber"));
            expect(newState).toEqual(["cucumber"]);
        });
    });

    describe("unfavorite action", () => {
        it("removes a favorite", () => {
            const state = favoritesReducer(initialFavoritesState, favorite("cucumber"));
            const newState = favoritesReducer(state, favorite("capybara"));
            const newestState = favoritesReducer(newState, unfavorite("cucumber"));
            expect(newestState).toEqual(["capybara"]);
        });

       it("gracefully ignores an unknown removal", () => {
            const state = favoritesReducer(initialFavoritesState, favorite("cucumber"));
            const newState = favoritesReducer(state, unfavorite("capybara"));
            expect(newState).toEqual(["cucumber"]);
        });
    });
});