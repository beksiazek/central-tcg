import { React, useState, useEffect, useContext } from "react";
import _ from "lodash";
import { useParams } from "react-router-dom";
import cartContext from "../../context/cartContext";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { firestore } from "../../firebase/firebase";

const db = firestore;
const productsCollection = db.collection("products");

export default function ItemDetailContainer() {
	const { itemId } = useParams();
	const [item, setItem] = useState();
	const [currentQuantity, setCurrentQuantity] = useState(1);
	const [checkButtonIsDisabled, setCheckButtonIsDisabled] = useState(true);
	const [addedToCart, setAddedToCart] = useState(false);

	const { addItemToCart, cartItemList } = useContext(cartContext);

	function getMaxQuantity(itemId, stock) {
		const cartItem = _.find(
			cartItemList,
			({ item: { id } }) => id === itemId
		);

		if (cartItem) {
			let quantity = stock - cartItem.quantity;
			return quantity;
		} else {
			return stock;
		}
	}

	function onAddToCart() {
		addItemToCart(item, currentQuantity);
		setAddedToCart(true);
	}

	function setCheckButton() {
		item &&
			setCheckButtonIsDisabled(
				currentQuantity <= 0 || currentQuantity > item.stock
			);
	}

	useEffect(() => {
		productsCollection
			.doc(itemId.toString())
			.get()
			.then((result) => {
				setItem(result.data());
			})
			.catch((err) => {
				toast.error(
					"Hubo un error! Por favor recarga la página o inténtalo de nuevo más tarde."
				);
			});
	}, [itemId]);

	useEffect(() => setCheckButton());

	return (
		<>
			{item ? (
				<ItemDetail
					item={item}
					initQuantity={1}
					maxQuantity={getMaxQuantity(item.id, item.stock)}
					currentQuantity={currentQuantity}
					setCurrentQuantity={setCurrentQuantity}
					onAddToCart={onAddToCart}
					addedToCart={addedToCart}
					checkButtonIsDisabled={checkButtonIsDisabled}
					setCheckButtonIsDisabled={setCheckButtonIsDisabled}
				/>
			) : (
				<div className="loader-container">
					<LoaderSpinner />
				</div>
			)}
			<ToastContainer
				position="top-center"
				autoClose={false}
				closeOnClick={false}
			/>
		</>
	);
}
