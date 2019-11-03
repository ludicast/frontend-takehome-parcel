import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { SearchPage } from './components/searchPage';
import { GemPage } from './components/gemPage';
import { FavoritesPage } from './components/favoritesPage';

export const App = () => {
    return (<Router>
        <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/gems/:name" component={GemPage} />
            <Route path="/favorites" component={FavoritesPage} />
        </Switch>
    </Router>);
};