import React from 'react';
import "./ItemList.css";

export default function ItemList(props) {
    const { children } = props;
    return (
        <div className="item-list">
            {children}
        </div>
    )
}
