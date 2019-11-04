import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { SearchPage } from './components/searchPage';
import { SearchProvider } from './searchContext';

import { FavoritesPage } from './components/favoritesPage';

export const App = () => {
    return (<Router>
        <SearchProvider>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route path="/favorites" component={FavoritesPage} />
            </Switch>
        </SearchProvider>
    </Router>);
};