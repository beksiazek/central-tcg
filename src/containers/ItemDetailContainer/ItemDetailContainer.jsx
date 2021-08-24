import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import cartContext from "../../context/cartContext";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { firestore } from "../../firebase/firebase";

const db = firestore;
const productsCollection = db.collection("products");

export default function ItemDetailContainer() {
	const { itemId } = useParams();
	const [item, setItem] = useState();
	const [currentQuantity, setCurrentQuantity] = useState(1);
	const [checkButtonIsDisabled, setCheckButtonIsDisabled] = useState(true);
	const [addedToCart, setAddedToCart] = useState(false);

	const { addItemToCart } = useContext(cartContext);

	function onAddToCart() {
		addItemToCart(item, currentQuantity);
		setAddedToCart(true);
		console.log(
			currentQuantity +
				(currentQuantity > 1 ? " items" : " item") +
				" se han agregado al carrito!"
		);
	}

	useEffect(() => {
		productsCollection.doc(itemId.toString()).get()
			.then((result) => {
				setItem(result.data());
			})
			.catch((err) => {
				console.log("No se pudo completar la petición.", err);
			});
	}, [itemId]);

	useEffect(
		() =>
			setCheckButtonIsDisabled(
				currentQuantity <= 0 || currentQuantity > 3
			),
		[currentQuantity]
	);

	return item ? (
		<ItemDetail
			item={item}
			initQuantity={1}
			maxQuantity={3}
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
	);
}
