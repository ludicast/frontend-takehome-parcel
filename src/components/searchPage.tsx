import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from "react-redux";

import { currentGemList, areGemsLoading } from '../store/selectors';
import { fetchGemsAsync } from '../store/actions';
import { SearchContext } from '../searchContext';
import { GemGrid } from './gemGrid';
import { SearchBar } from './searchBar';

export const SearchPage = () => {
    const gemList = useSelector(currentGemList);
    const dispatch = useDispatch();
    const {query, setQuery} = useContext(SearchContext);

    const startSearch = () => {
        dispatch(fetchGemsAsync.request(query));
    };

    const starterSearch = (value: string) => () => {
        setQuery(value);
        startSearch();
    };

    return <>
        <SearchBar></SearchBar>
        {gemList.length > 0 ? <GemGrid gems={gemList}></GemGrid>
        : query.length === 0  &&  <p>Load.  Some suggestions: <b onClick={starterSearch('rspec')}>rspec</b>  </p> }
    </>
}