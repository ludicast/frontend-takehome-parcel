import React from 'react';
import ReactDOM from 'react-dom';
import { Heart } from './heart';
import { Gem } from "../models";

interface GemCardProps {
    gem: Gem
}

export const GemCard = ({gem}: GemCardProps) => {
    return <li><Heart name={gem.name}></Heart>: {gem.name}</li>;
}