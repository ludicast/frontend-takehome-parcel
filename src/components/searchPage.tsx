import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from "react-redux";
import { currentGemList, areGemsLoading } from '../store/selectors';
import { fetchGemsAsync } from '../store/actions';
import { GemCard } from './gemCard';

export const SearchPage = () => {
    const gemList = useSelector(currentGemList);
    const loadingList = useSelector(areGemsLoading);
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const search = () => {
        dispatch(fetchGemsAsync.request(query))
    };
    
    return <>
        <input
            type="text"
            placeholder="Search Gem"
            onChange={evt => setQuery(evt.target.value)}
        />
        <button disabled={query===""} onClick={search}>search</button>
        <b>{loadingList ? "LOADING" : ""}</b>
        <ul>
            {
            gemList.map(
                (gem, key) => <GemCard gem={gem} key={key}></GemCard>
            )
            }
        </ul>
    </>
}