import React from 'react';
import { Heart } from './heart';
import { Gem } from "../models";
import { useStyles } from './classes';
import { Card, CardContent, Typography } from '@material-ui/core';

interface GemCardProps {
    gem: Gem
}

export const GemCard = ({gem}: GemCardProps) => {
    const classes = useStyles();
    return <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h5">
                <Heart name={gem.name}></Heart>
                {gem.name}
            </Typography>
            <Typography>
                Authors: { gem.authors }
            </Typography>
        </CardContent>
    </Card>;
}