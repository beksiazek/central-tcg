import React from 'react';
import DefaultView from '../DefaultView/DefaultView';
import { RiSearchEyeLine } from "react-icons/ri";


export default function searchACardView() {
    return (
        <DefaultView>
            <p><RiSearchEyeLine className="view-icon" /></p>
            <h3>Para empezar busca una carta desde la barra superior!</h3>
        </DefaultView>
    )
}