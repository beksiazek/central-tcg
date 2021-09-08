import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ShopItemList(props) {
	const { items, categoryId } = props;

	function renderItem(item) {
		return item.id && <Item
			key={item.id}
			itemId={item.id}
			imgSource={item.card_images && item.card_images[0].image_url}
			itemLabel={item.name}
			hasStock={item.stock > 0}
		></Item>;
	}

	return (
		<div className="list-container">    
			<h1 className="list-title">{categoryId ? categoryId+"s" : "Tienda"}</h1>
			<div className="item-list">			
				{items.map((item) => renderItem(item))}	
			</div>
		</div>
	);
}
