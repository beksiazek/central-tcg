import { React, useContext } from "react";
import cartContext from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";

export default function CartList(props) {
	const { cartItemList } = useContext(cartContext);

	function renderItem(product) {
		return (
			<CartItem
				key={product.item.id}
				item={product.item}
				quantity={product.quantity}
			></CartItem>
		);
	}

	return (
		<div>
			{cartItemList ? cartItemList.map((item) => renderItem(item)) : ""}
		</div>
	);
}
