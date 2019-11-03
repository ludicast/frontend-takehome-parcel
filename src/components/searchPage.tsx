import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from "react-redux";
import { currentGemList, areGemsLoading } from '../store/selectors';
import { fetchGemsAsync } from '../store/actions';
import { GemCard } from './gemCard';
import { Gem } from '../models';

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
    const [query, setQuery] = useState("");

    const search = () => {
        dispatch(fetchGemsAsync.request(query))
    };

    const starterSearch = (query: string) => {
        setQuery(query);
        search();
    };

    return <>
        <input
            type="text"
            placeholder="Search Gem"
            onChange={evt => setQuery(evt.target.value)}
        />
        <button disabled={query===""} onClick={search}>search</button>
        
        <b>{loadingList ? "LOADING" : ""}</b>
        {gemList.length > 0 ? <GemGrid gems={gemList}></GemGrid>
        : query.length === 0  &&  <p>Load.  Some suggestions: <b onClick={starterSearch('rspec')}>rspec</b>  </p> }
    </>
}