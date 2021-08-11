import React from "react";
import Item from "../Item/Item";
import BaseButton from "../BaseButton/BaseButton";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import "./ItemList.css";

export default function ShopItemList(props) {
	const { items, prevPage, nextPage, prevButtonDisabled } = props;

	function renderItem(item) {
		return <Item
			key={item.id}
			itemId={item.id}
			imgSource={item.card_images[0].image_url}
			itemLabel={item.name}
		></Item>;
	}

	return (
		<div className="list-container">    
			<h1>Productos destacados</h1>
			<div className="item-list">
				<BaseButton variant="outline-light" label={<BiLeftArrow />} onClick={prevPage} isDisabled={prevButtonDisabled} />			
				{items.map((item) => renderItem(item))}
				<BaseButton variant="outline-light" label={<BiRightArrow />} onClick={nextPage} />	
			</div>
		</div>
	);
}
