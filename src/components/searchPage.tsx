import React from 'react'
import { useSelector } from "react-redux";

import { currentGemList } from '../store/selectors';
import { GemGrid } from './gemGrid';
import { SearchBar } from './searchBar';

export const SearchPage = () => {
    const gemList = useSelector(currentGemList);

    return <>
        <SearchBar></SearchBar>
        <GemGrid gems={gemList}></GemGrid>
    </>
}