import {fetchGemsFlow} from "./epics"
import { of } from "rxjs";
import { fetchGemsAsync } from "./actions";
import { toArray } from "rxjs/operators";
import { Gem } from "~models";

describe("epics", () => {
    describe("fetchGemsFlow", () => {
        it("loads Gems on success", (done) => {
            const gems = [
                {
                    name: "cucumber",
                    homepage_uri: "a.com"
                }, {
                    name: "not capybara",
                    homepage_uri: "b.com"
                }
            ];

            const dependencies = {
                getJSON: (_url: string) => of(gems)
            };

            const actions$ = of(fetchGemsAsync.request("cucumber"));

            const result$ = fetchGemsFlow(actions$, {}, dependencies).pipe(toArray());

            result$.subscribe((actions: any[]) => {
                const resultAction = fetchGemsAsync.success([
                    {
                        name: "cucumber",
                        homepageUri: "a.com"
                    }, {
                        name: "not capybara",
                        homepageUri: "b.com"
                    }
                ] as unknown as Gem[]);
                expect(actions).toEqual([resultAction]);
                done();
            });
        });
    });
});