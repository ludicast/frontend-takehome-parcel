import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MuiAppBar from "@material-ui/core/AppBar";

import { SearchPage } from "./components/searchPage";
import { FavoritesPage } from "./components/favoritesPage";
import { Button, Typography, Toolbar } from "@material-ui/core";
import { useStyles } from "./components/classes";
import { SearchBar } from "./components/searchBar";

export const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <MuiAppBar position="sticky" className={classes.titleBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Link to="/" className={classes.headerLink}>
              GemTumble
            </Link>
          </Typography>
          <SearchBar />

          <Link to="/favorites">
            <Button color="primary" variant="contained">
              View Favorites
            </Button>
          </Link>
        </Toolbar>
      </MuiAppBar>

      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/gems/:query" component={SearchPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Switch>
    </Router>
  );
};
