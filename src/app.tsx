import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from "react-redux";
import { fetchGemsAsync } from './store/actions';
import { Gem } from "./models";
import { currentGemList } from './store/selectors';
import { Heart } from './components/heart';
import { Favorites } from './components/favorites';

interface GemCardProps {
    gem: Gem
}

export const GemCard = ({gem}: GemCardProps) => {
    return <li><Heart name={gem.name}></Heart>: {gem.name}</li>;
}

export const App = () => {
    const gemList = useSelector(currentGemList);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchGemsAsync.success([
            {
                name: "gem 1",
                downloads: 44,
                versionDownloads: 5,
                authors: "Nate Kidwell",
            },
            {
                name: "gem 2",
                downloads: 3444,
                versionDownloads: 455,
                authors: "Nord Kidwell",
            },
        ]))
    }, []);
    return (<><ul>
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