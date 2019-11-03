import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector } from "react-redux";
import { currentFavoritesList } from '../store/selectors';

export const FavoritesPage = () => {
    const favorites = useSelector(currentFavoritesList);
    return <ul>{favorites.map(
        (fave, key) => <li key={key}>heart: {fave}</li>
    )}</ul>
}