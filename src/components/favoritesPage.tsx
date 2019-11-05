import React from "react";
import { useSelector } from "react-redux";
import { currentFavoriteGems } from "../store/selectors";
import { GemGrid } from "./gemGrid";
import { EmptyHero } from "./emptyHero";

export const FavoritesPage = () => {
  const favorites = useSelector(currentFavoriteGems);
  return !!favorites.length ? (
    <GemGrid gems={favorites}></GemGrid>
  ) : (
    <EmptyHero msg="You have no favorites." />
  );
};
