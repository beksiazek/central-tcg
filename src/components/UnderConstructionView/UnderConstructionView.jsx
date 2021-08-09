import React from 'react';
import DefaultView from '../DefaultView/DefaultView';
import { VscTools } from "react-icons/vsc";


export default function UnderConstructionView() {
    return (
        <DefaultView>
            <p><VscTools className="view-icon" /></p>
            <h3>Estamos trabajando para que Central-TCG te de la mejor experiencia de compra, venta y canje de cartas coleccionables.</h3>
            <h4>Vuelve pronto!</h4>
        </DefaultView>
    )
}
