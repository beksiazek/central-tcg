import { React, useState, useEffect } from "react";
import _ from "lodash";
import ItemList from "../../components/ItemList/ItemList";
import ShopItemCard from "../ShopItemCard/ShopItemCard";
import getItems from "../../services/ygoapi.call";

export default function ShopItemList() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		getItems()
			.then((result) => {
				setItems(_.dropRight(result.data, 2));
			})
			.catch(() => {
				console.log("No se pudo completar la petición.");
			});
	}, []);

	console.log(items);

	function renderItem(item) {
		return <ShopItemCard
			key={item.id}
			imgSource={item.card_images[0].image_url}
			itemLabel={item.name}
			initQuantity={1}
			maxQuantity={3}
		></ShopItemCard>;
	}

	return (
		<ItemList title="Productos destacados">
			{items.map((item) => renderItem(item))}
		</ItemList>
	);
}
