import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from "react-redux";
import { currentGemList, areGemsLoading } from '../store/selectors';
import { fetchGemsAsync } from '../store/actions';
import { GemCard } from './gemCard';
import { Gem } from '../models';
import { SearchContext } from '../searchContext';

const GemGrid = ({gems}: {gems: Gem[]}) => {
    return <ul>
        {
        gems.map(
            (gem, key) => <GemCard gem={gem} key={key}></GemCard>
        )
        }
    </ul>
}

export const SearchPage = () => {
    const gemList = useSelector(currentGemList);
    const loadingList = useSelector(areGemsLoading);
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
        <input
            type="text"
            placeholder="Search Gem"
            onChange={evt => setQuery(evt.target.value)}
        />
        <button disabled={query===""} onClick={startSearch}>search</button>

        <b>{loadingList ? "LOADING" : ""}</b>
        {gemList.length > 0 ? <GemGrid gems={gemList}></GemGrid>
        : query.length === 0  &&  <p>Load.  Some suggestions: <b onClick={starterSearch('rspec')}>rspec</b>  </p> }
    </>
}