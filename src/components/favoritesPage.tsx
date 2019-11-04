import React from 'react'
import { useSelector } from "react-redux";
import { currentFavoriteGems } from '../store/selectors';
import { GemGrid } from './gemGrid';

export const FavoritesPage = () => {
    const favorites = useSelector(currentFavoriteGems);
    return <GemGrid gems={favorites}></GemGrid>
}