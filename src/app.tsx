import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import MuiAppBar from '@material-ui/core/AppBar';

import { SearchPage } from './components/searchPage';
import { SearchProvider } from './searchContext';
import { FavoritesPage } from './components/favoritesPage';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from './components/classes';

export const App = () => {
    const classes = useStyles();
    return (<>
    <Router>
        <MuiAppBar position="sticky" className={classes.titleBar}>
           <Typography variant="h5" className={classes.title}>
                GemTumble
            </Typography>
            <Link to="/">
                <Button color="primary" variant="contained">
                    Search
                </Button>
            </Link>
            <Link to="/favorites">
                <Button color="primary" variant="contained">
                    Favorites
                </Button>
            </Link>
        </MuiAppBar>
        <SearchProvider>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route path="/favorites" component={FavoritesPage} />
            </Switch>
        </SearchProvider>
    </Router></>);
};