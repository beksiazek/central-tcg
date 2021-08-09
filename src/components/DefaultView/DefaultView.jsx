import React from 'react';
import "./DefaultView.css";


export default function DefaultView(props) {
    const { children } = props;
    return (
        <div className="default-view-container text">
            {children}
        </div>
    )
}