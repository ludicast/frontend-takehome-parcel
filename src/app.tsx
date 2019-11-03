import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchGemsAsync } from './store/actions';
import { Gem } from "./models";
import { currentGemList, areGemsLoading } from './store/selectors';
import { Heart } from './components/heart';
import { Favorites } from './components/favorites';
import { searchReducer } from '~store/reducers/search';

interface GemCardProps {
    gem: Gem
}

export const GemCard = ({gem}: GemCardProps) => {
    return <li><Heart name={gem.name}></Heart>: {gem.name}</li>;
}

export const App = () => {
    const gemList = useSelector(currentGemList);
    const loadingList = useSelector(areGemsLoading);
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const search = () => {
        dispatch(fetchGemsAsync.request(query))
    };
    
    return (<>
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
    
        <hr/>
        <Favorites></Favorites>
        </>
    );
};