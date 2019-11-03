import { favorite, unfavorite } from '../store/actions';
import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from "react-redux";
import { currentFavoritesList } from '../store/selectors';

export const Heart = ({name}: {name: string}) => {
    const favorites = useSelector(currentFavoritesList);
    const isFavorite = favorites.includes(name);
    const dispatch = useDispatch();
    const toggleFavored = () => {
        const action = isFavorite ? unfavorite : favorite;
        dispatch(action(name));
    }
    return <b onClick={toggleFavored}>{isFavorite ? "fave": "not fave"}</b>
}