import React, { useContext } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { currentGemList } from '../store/selectors';
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
        <GemGrid gems={gemList}></GemGrid>
    </>
}