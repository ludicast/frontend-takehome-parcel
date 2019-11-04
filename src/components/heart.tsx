import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

import { currentFavoritesList } from '../store/selectors';
import { favorite, unfavorite } from '../store/actions';
import { classes } from 'istanbul-lib-coverage';
import { useStyles } from './classes';

export const Heart = ({name}: {name: string}) => {
    const classes = useStyles();
    const favorites = useSelector(currentFavoritesList);
    const isFavorite = favorites.includes(name);
    const dispatch = useDispatch();
    const toggleFavored = () => {
        const action = isFavorite ? unfavorite : favorite;
        dispatch(action(name));
    }

    return <>{isFavorite
        ? <FavoriteOutlinedIcon className={classes.heartColor}  onClick={toggleFavored} />
        : <FavoriteBorderOutlinedIcon className={classes.heartColor} onClick={toggleFavored} />
    }</>
}