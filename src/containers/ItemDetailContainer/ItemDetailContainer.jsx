import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import getItems from "../../services/ygoapi.call";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

export default function ItemDetailContainer(props) {
	const { itemId } = useParams();
	const [item, setItem] = useState();

	useEffect(() => {
		getItems(itemId)
			.then((result) => {
				setItem(_.first(result.data));
			})
			.catch(() => {
				console.log("No se pudo completar la petición.");
			});
	}, []);


	return item ? (
		<ItemDetail item={item} />
	) :
	(
		<div className="loader-container">
			<LoaderSpinner />
		</div>
	);
}