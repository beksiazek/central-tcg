import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import kartContext from "../../context/kartContext";
import _ from "lodash";
import getItems from "../../services/ygoapi.call";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
	const { itemId } = useParams();
	const [item, setItem] = useState();
	const [currentQuantity, setCurrentQuantity] = useState(1);
	const [checkButtonIsDisabled, setCheckButtonIsDisabled] = useState(true);
	const [addedToKart, setAddedToKart] =useState(false);

	const { addItemToKart, removeItemFromKart } = useContext(kartContext);

	function onAddToKart() {
		addItemToKart(item, currentQuantity);
		setAddedToKart(true);
		console.log(
			currentQuantity +
				(currentQuantity > 1 ? " items" : " item") +
				" se han agregado al carrito!"
		);
	}

	useEffect(() => {
		getItems(itemId)
			.then((result) => {
				setItem(_.first(result.data));
			})
			.catch(() => {
				console.log("No se pudo completar la petición.");
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
			onAddToKart={onAddToKart}
			deletefromkart={removeItemFromKart}
			addedToKart={addedToKart}
			checkButtonIsDisabled={checkButtonIsDisabled}
			setCheckButtonIsDisabled={setCheckButtonIsDisabled}
		/>
	) : (
		<div className="loader-container">
			<LoaderSpinner />
		</div>
	);
}
