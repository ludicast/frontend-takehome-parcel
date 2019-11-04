import React from 'react'
import Grid from '@material-ui/core/Grid';

import { GemCard } from './gemCard';
import { Gem } from '../models';
import { useSelector } from 'react-redux';
import { areGemsLoading } from '../store/selectors';

export const GemGrid = ({gems}: {gems: Gem[]}) => {
    const loadingList = useSelector(areGemsLoading);

    return <Grid container spacing={4}>
        {
        gems.map(
            (gem, key) => <Grid item key={key} xs={12} sm={6} md={4}>
                <GemCard gem={gem}></GemCard>
            </Grid>
        )
        }</Grid>
}