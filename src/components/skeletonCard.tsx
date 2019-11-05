import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, Card, CardContent} from '@material-ui/core';

 export const SkeletonCard = () =>
    <Grid item xs={12} sm={6} md={4}>
        <Card>
        <CardContent>
            <Skeleton width="100%" height={30}></Skeleton>
            <Skeleton width="100%" height={10}></Skeleton>
            <Skeleton width="100%" height={10}></Skeleton>
            <Skeleton width="50%" height={10}></Skeleton>
            <Skeleton width="100%" height={10}></Skeleton>
        </CardContent>
        </Card>
    </Grid>