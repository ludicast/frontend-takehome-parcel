import { currentGemList, areGemsLoading, currentFavoritesList, searchStateSelector } from "./selectors";
import { AppState } from "./reducers";
import { Gem } from "~models";
import { initialFavoritesState } from "./reducers/favorites";
import { initialGemState } from "./reducers/gems";

const initialState: AppState = {
    favorites: initialFavoritesState,
    gems: initialGemState,
    search: {query: ""}
}

const populatedState: AppState = {
    favorites: ["capybara"],
    gems: {gems: new Map([
        ["capybara", {name: "capybara"} as Gem],
        ["cucumber", {name: "cucumber"} as Gem]
    ]), loadingList: true},
    search: {query: "rspec"}
}

describe("selectors", () => {
    describe("currentFavoritesList selector", () => {
        it("returns an unpopulated gemList as an empty array", () => {
            const gemList = currentFavoritesList(initialState);
            expect(gemList).toEqual([]);
        });

        it("returns a populated gemList as an array", () => {
            const gemList = currentFavoritesList(populatedState);
            expect(gemList).toEqual(["capybara"]);
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

    describe("searchState selector", () => {
        it("returns a blank when there no search string", () => {
            const searchState = searchStateSelector(initialState);
            expect(searchState).toEqual("");
        });

        it("returns the searchString when it exists", () => {
            const searchState = searchStateSelector(populatedState);
            expect(searchState).toEqual("rspec");
        });
    });
});