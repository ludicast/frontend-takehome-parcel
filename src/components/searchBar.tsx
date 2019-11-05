import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchGemsAsync } from "../store/actions";
import { useStyles } from "./classes";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

export const SearchBar = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  let history = useHistory();

  const startSearch = () => {
    setQuery("");
    history.push(`/gems/${query}`);
  };

  const changeQuery = (evt: any) => {
    setQuery(evt.target.value);
  };

  const catchReturn = (evt: KeyboardEvent) => {
    if (evt.key === "Enter" && !!query) {
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
        value={query}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};
