import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from "react-router";

export const GemPage = () => {
    const { name } = useParams();
    return <h2>PAGE: {name}</h2>;
};