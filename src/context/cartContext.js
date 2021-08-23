import { useState, createContext } from "react";
import _ from "lodash";

const cartContext = createContext();

export const { Consumer, Provider } = cartContext;

export function CartContextProvider({ children }) {
	const [cartItemList, setCartItemList] = useState([]);
	const [cartItemCount, setCartItemCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	console.log(cartItemList, cartTotal);

	function setCartItems(itemList) {
		setCartItemList(itemList);
		const itemCount = _.sumBy(itemList, "quantity");
		const cartSum = _.sumBy(itemList, (product) => {
			return (
				product.item.card_prices[0].tcgplayer_price * product.quantity
			);
		});
		setCartItemCount(itemCount);
		setCartTotal(cartSum);
	}

	function addItemToCart(item, quantity) {
		const cartItem = _.find(
			cartItemList,
			({ item: { id } }) => id === item.id
		);

		if (cartItem) {
			cartItem.quantity += quantity;
			setCartItems(cartItemList);
		} else {
			const cartItem = { item, quantity };
			setCartItems(_.concat(cartItemList, cartItem));
		}
	}

	function setItemQuantityFromCart(item, quantity) {
		const cartItem = _.find(
			cartItemList,
			({ item: { id } }) => id === item.id
		);

		if (cartItem) {
			cartItem.quantity = quantity;
			setCartItems(cartItemList);
		}
	}

	function removeItemFromCart(itemId) {
		const newItemList = _.reject(
			cartItemList,
			({ item }) => item.id === itemId
		);
		setCartItems(newItemList);
	}

	function clearCart() {
		setCartItemList([]);
		setCartItemCount(0);
	}

	return (
		<cartContext.Provider
			value={{
				cartItemList,
				cartItemCount,
				cartTotal,
				addItemToCart,
				setItemQuantityFromCart,
				removeItemFromCart,
				clearCart,
			}}
		>
			{children}
		</cartContext.Provider>
	);
}

export default cartContext;
