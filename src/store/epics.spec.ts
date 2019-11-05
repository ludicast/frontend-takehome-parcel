import { fetchGemsFlow } from "./epics";
import { of, throwError } from "rxjs";
import { fetchGemsAsync } from "./actions";
import { toArray } from "rxjs/operators";
import { Gem } from "~models";

describe("epics", () => {
  describe("fetchGemsFlow", () => {
    it("loads Gems on success", done => {
      const gems = [
        {
          name: "cucumber",
          homepage_uri: "a.com"
        },
        {
          name: "not capybara",
          homepage_uri: "b.com"
        }
      ];

      const dependencies = {
        getJSON: (_url: string) => of(gems),
        notify: (_message: string) => {}
      };

      const actions$ = of(fetchGemsAsync.request("cucumber"));

      const result$ = fetchGemsFlow(actions$, {}, dependencies).pipe(toArray());

      result$.subscribe((actions: any[]) => {
        const resultAction = fetchGemsAsync.success(([
          {
            name: "cucumber",
            homepageUri: "a.com"
          },
          {
            name: "not capybara",
            homepageUri: "b.com"
          }
        ] as unknown) as Gem[]);
        expect(actions).toEqual([resultAction]);
        done();
      });
    });

    it("notifies on failure", done => {
      const messageLog: string[] = [];
      const dependencies = {
        getJSON: (_url: string) => throwError(new Error("some error")),
        notify: (message: string) => {
          messageLog.push(message);
        }
      };

      const actions$ = of(fetchGemsAsync.request("cucumber"));

      const result$ = fetchGemsFlow(actions$, {}, dependencies).pipe(toArray());

      result$.subscribe((actions: any[]) => {
        const resultAction = fetchGemsAsync.failure(new Error("some error"));
        expect(actions).toEqual([resultAction]);
        expect(messageLog).toEqual(["Error loading gems: some error"]);
        done();
      });
    });
  });
});
