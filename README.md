# GemTumble

## Approach
1. Move to typescript.
    1. It allows "better reduxing" through libs like typesafe-actions.
    1. Safer programming, and sets the project up for "programming in the large".
2. Add redux and affiliated libraries
    1. `typesafe-actions` (support for typescript and redux)
    2. `redux-observable` (leverages rxjs to access endpoints)
    3. `redux-persist` (for saving the "favorites" redux slice to local storage)
    4. `reselect` (memoized selectors)
3. Other libraries
   1. "modern" `react` - hooks in functional components
   1. `material-ui` (for widgets)
   2. `react-router`
   3. `lodash` (to safely paste over esnext differences).
4. Testing
   1. Full coverage of redux (reducers, selectors, epics).
   2. Some UI testing with jest and react-testing-library
   3. Run with the standard `npm test` command