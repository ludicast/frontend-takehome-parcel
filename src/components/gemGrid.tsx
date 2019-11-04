import React from 'react'
import ReactDOM from 'react-dom'

import { GemCard } from './gemCard';
import { Gem } from '../models';
import { useSelector } from 'react-redux';
import { areGemsLoading } from '../store/selectors';

export const GemGrid = ({gems}: {gems: Gem[]}) => {
    const loadingList = useSelector(areGemsLoading);

    return <ul>
        {
        gems.map(
            (gem, key) => <GemCard gem={gem} key={key}></GemCard>
        )
        }
    </ul>
}