import React from 'react';
import "./ItemList.css";

export default function ItemList(props) {
    const { children, title } = props;
    return (
        <div className="list-container">    
            <h1>{title}</h1>
            <div className="item-list">
                {children}
            </div>
        </div>
    )
}
