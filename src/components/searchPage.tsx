import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { currentGemList } from "../store/selectors";
import { GemGrid } from "./gemGrid";
import { EmptyHero } from "./emptyHero";
import { fetchGemsAsync } from "../store/actions";

export const SearchPage = () => {
  const gemList = useSelector(currentGemList);
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      dispatch(fetchGemsAsync.request(query));
    }
  }, [query]);

  return query ? (
    <>
      <GemGrid gems={gemList}></GemGrid>
    </>
  ) : (
    <EmptyHero msg="Search for RubyGems"></EmptyHero>
  );
};
