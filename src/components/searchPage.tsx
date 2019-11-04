import React from 'react'
import { useSelector } from "react-redux";

import { currentGemList } from '../store/selectors';
import { GemGrid } from './gemGrid';

export const SearchPage = () => {
    const gemList = useSelector(currentGemList);

    return <>
        <GemGrid gems={gemList}></GemGrid>
    </>
}