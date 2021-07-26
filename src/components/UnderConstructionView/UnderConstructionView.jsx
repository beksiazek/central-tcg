import React from 'react';
import { VscTools } from "react-icons/vsc";
import "./UnderConstructionView.css";


export default function UnderConstructionView() {
    return (
        <div className="under-construction-container text text-center allign-items-center">
            <p><VscTools className="tools-icon" /></p>
            <h3>Estamos trabajando para que Central-TCG te de la mejor experiencia de compra, venta y canje de cartas coleccionables.</h3>
            <h4>Vuelve pronto!</h4>
        </div>
    )
}
