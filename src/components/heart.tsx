import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

import { currentFavoriteNames } from '../store/selectors';
import { favorite, unfavorite } from '../store/actions';
import { useStyles } from './classes';
import { Gem } from '~models';

export const Heart = ({gem}: {gem: Gem}) => {
    const classes = useStyles();
    const favorites = useSelector(currentFavoriteNames);
    const isFavorite = favorites.includes(gem.name);
    const dispatch = useDispatch();
    const toggleFavored = () => {
        const action = isFavorite ? unfavorite : favorite;
        dispatch(action(gem));
    }

    return isFavorite
        ? <FavoriteOutlinedIcon className={classes.heartIcon}  onClick={toggleFavored} />
        : <FavoriteBorderOutlinedIcon className={classes.heartIcon} onClick={toggleFavored} />
}