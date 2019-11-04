import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from "react-redux";

import { fetchGemsAsync } from '../store/actions';
import { SearchContext } from '../searchContext';

export const SearchBar = () => {
    const dispatch = useDispatch();
    const {query, setQuery} = useContext(SearchContext);

    const startSearch = () => {
        dispatch(fetchGemsAsync.request(query));
    };

    return <>
        <input
            type="text"
            placeholder="Search Gem"
            onChange={evt => setQuery(evt.target.value)}
        />
        <button disabled={query===""} onClick={startSearch}>search</button>
    </>
}