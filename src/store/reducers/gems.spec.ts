import {gemReducer, initialGemState } from "./gems";
import { fetchGemsAsync } from "../actions";
import { Gem } from "../../models";

describe("gems reducer", () => {
    it("ignores unknown actions", () => {
        const state = gemReducer(initialGemState, {type: "UNKNOWN"});
        expect(state).toEqual(initialGemState);
    });

    describe("fetchGemsAsync.request", () => {
        it("turns on loading", () => {
            const state = gemReducer(
                initialGemState,
                fetchGemsAsync.request("capybara")
            );
            expect(state.loadingList).toEqual(true);
        });
    });

    describe("fetchGemsAsync.failure", () => {
        it("turns off loading", () => {
            const state = gemReducer(
                {...initialGemState, loadingList: true},
                fetchGemsAsync.failure(new Error("some error"))
            );
            expect(state.loadingList).toEqual(false);
        });
    });

    describe("fetchGemsAsync.success", () => {
        it("assigns the gems", () => {
            const state = gemReducer(initialGemState, fetchGemsAsync.success([{name: "capybara"} as Gem]));
            expect(state.gems).toEqual(new Map([["capybara", {name: "capybara"}]]));
        });

        it("turns off loading", () => {
            const state = gemReducer({...initialGemState, loadingList: true}, fetchGemsAsync.success([]));
            expect(state.loadingList).toEqual(false);
        });
    });
});