import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { currentGemList } from "../store/selectors";
import { GemGrid } from "./gemGrid";
import { SearchContext } from "../searchContext";
import { EmptyHero } from "./emptyHero";

export const SearchPage = () => {
  const gemList = useSelector(currentGemList);
  const { query } = useContext(SearchContext);

  return query ? (
    <>
      <div>{query}</div>
      <GemGrid gems={gemList}></GemGrid>
    </>
  ) : (
    <EmptyHero msg="Enter Search Term"></EmptyHero>
  );
};
