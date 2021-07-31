import { React, useState } from "react";
import ItemCard from "../../components/ItemCard/ItemCard";

export default function ShopItemCard(props) {
	const { initQuantity } = props;
	const [currentQuantity, setCurrentQuantity] = useState(initQuantity);

	function onAddToKart() {
		console.log(
			currentQuantity +
				(currentQuantity > 1 ? " items" : " item") +
				" se han agregado al carrito!"
		);
	}

	return (
		<ItemCard
			buttonLabel="Agregar al carrito"
			currentQuantity={currentQuantity}
			setCurrentQuantity={setCurrentQuantity}
			onAddToKart={onAddToKart}
			{...props}
		/>
	);
}
