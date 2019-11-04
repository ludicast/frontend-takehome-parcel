import React, { useContext, useEffect } from 'react'
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import { fetchGemsAsync } from '../store/actions';
import { SearchContext } from '../searchContext';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './classes';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const {query, setQuery} = useContext(SearchContext);

    useEffect(() => {
        dispatch(fetchGemsAsync.request("cucumber"));
    }, []);

    const startSearch = () => {
        dispatch(fetchGemsAsync.request(query));
    };

    return <>
        <TextField
          className={classes.searchTextField}
          label="search"
          margin="normal"
          variant="outlined"
          onChange={evt => setQuery(evt.target.value)}
        />
        <Button disabled={query===""} onClick={startSearch} variant="contained" color="primary">
            Search
        </Button>
    </>
}