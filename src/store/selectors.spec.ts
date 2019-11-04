import { currentGemList, areGemsLoading, currentFavoriteNames, currentFavoriteGems } from "./selectors";
import { AppState } from "./reducers";
import { Gem } from "~models";
import { initialFavoritesState } from "./reducers/favorites";
import { initialGemState } from "./reducers/gems";

const initialState: AppState = {
    favorites: initialFavoritesState,
    gems: initialGemState,
}

const populatedState: AppState = {
    favorites: {capybara: {name: "capybara"} as Gem},
    gems: {gems: new Map([
        ["capybara", {name: "capybara"} as Gem],
        ["cucumber", {name: "cucumber"} as Gem]
    ]), loadingList: true},
}

describe("selectors", () => {
    describe("currentFavoriteNames selector", () => {
        it("returns an unpopulated gemList as an empty array", () => {
            const gemList = currentFavoriteNames(initialState);
            expect(gemList).toEqual([]);
        });

        it("returns a populated gemList as an array", () => {
            const gemList = currentFavoriteNames(populatedState);
            expect(gemList).toEqual(["capybara"]);
        });
    });

    describe("currentFavoriteGems selector", () => {
        it("returns an unpopulated gemList as an empty array", () => {
            const gemList = currentFavoriteGems(initialState);
            expect(gemList).toEqual([]);
        });

        it("returns a populated gemList as an array", () => {
            const gemList = currentFavoriteGems(populatedState);
            expect(gemList).toEqual([{name: "capybara"}]);
        });
    });

    describe("currentGemList selector", () => {
        it("returns an unpopulated gemList as an empty array", () => {
            const gemList = currentGemList(initialState);
            expect(gemList).toEqual([]);
        });

        it("returns a populated gemList as an array", () => {
            const gemList = currentGemList(populatedState);
            expect(gemList).toEqual([{name: "capybara"}, {name: "cucumber"}]);
        });
    });

    describe("areGemsLoading selector", () => {
        it("returns when the gems are not loading", () => {
            const loading = areGemsLoading(initialState);
            expect(loading).toEqual(false);
        });

        it("returns when the gems are loading", () => {
            const loading = areGemsLoading(populatedState);
            expect(loading).toEqual(true);
        });
    });
});