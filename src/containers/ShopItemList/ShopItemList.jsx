import React from "react";
import ItemList from "../../components/ItemList/ItemList";
import ShopItemCard from "../ShopItemCard/ShopItemCard";

export default function ShopItemList(props) {
	const { items, kartItemCount, setKartItemCount, url } = props;

	function renderItem(item) {
		return <ShopItemCard
			key={item.id}
			itemId={item.id}
			imgSource={item.card_images[0].image_url}
			itemLabel={item.name}
			initQuantity={1}
			maxQuantity={3}
			kartItemCount={kartItemCount} 
			setKartItemCount={setKartItemCount}
			url={url}
		></ShopItemCard>;
	}

	return (
		<ItemList title="Productos destacados">
			{items.map((item) => renderItem(item))}
		</ItemList>
	);
}
