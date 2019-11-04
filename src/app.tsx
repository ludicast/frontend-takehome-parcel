import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import MuiAppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';

import { SearchPage } from './components/searchPage';
import { SearchProvider } from './searchContext';
import { FavoritesPage } from './components/favoritesPage';
import { Button, Typography, Toolbar, InputBase } from '@material-ui/core';
import { useStyles } from './components/classes';

export const App = () => {
    const classes = useStyles();
    return (<>
    <Router>
        <MuiAppBar position="sticky" className={classes.titleBar}>
            <Toolbar>

           <Typography variant="h5" className={classes.title}>
                GemTumble
            </Typography>
 <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

            <Link to="/favorites">
                <Button color="primary" variant="contained">
                    Favorites
                </Button>
            </Link>
            </Toolbar>
        </MuiAppBar>
        <SearchProvider>
            <Switch>
                <Route exact path="/" component={SearchPage} />
                <Route path="/favorites" component={FavoritesPage} />
            </Switch>
        </SearchProvider>
    </Router></>);
};