import React from 'react'
import { useSelector } from "react-redux";
import { currentFavoritesList } from '../store/selectors';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const FavoritesPage = () => {
    const favorites = useSelector(currentFavoritesList);
    return <Menu open={true}>{favorites.map(
        (fave, key) => <MenuItem key={key}>{fave}</MenuItem>
    )}</Menu>
}