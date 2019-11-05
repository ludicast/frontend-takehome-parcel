import React, { useState } from "react";
import { useHistory } from "react-router";
import { useStyles } from "./classes";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

export const SearchBar = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  let history = useHistory();

  const startSearch = () => {
    if (!!query) {
      history.push(`/gems/${query}`);
      setQuery("");
    }
  };

  const changeQuery = (evt: any) => {
    setQuery(evt.target.value);
  };

  const catchReturn = (evt: any) => {
    if (evt.key === "Enter") {
      startSearch();
    }
  };
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        onKeyPress={catchReturn}
        onChange={changeQuery}
        onBlur={startSearch}
        value={query}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};
