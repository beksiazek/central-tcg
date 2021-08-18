import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../../components/ItemList/ItemList";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import getItems from "../../services/ygoapi.call";

export default function Shop(props) {
	const { categoryId } = useParams();
	const [items, setItems] = useState([]);
	const [offset, setOffset] = useState(0);
	const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);

	useEffect(() => {
		getItems(null, categoryId, null, offset)
			.then((result) => {
				setItems(result.data);
			})
			.catch(() => {
				console.log("No se pudo completar la petición.");
			});
		setPrevButtonDisabled(offset<4);
	}, [categoryId, offset]);

	function prevPage () {
			setOffset(offset-4);
		}

	function nextPage () {
		setOffset(offset+4);
	}


	return items ? (
		<div className="shop-container">	
					<ItemList
						items={items}
						prevPage={prevPage}
						nextPage={nextPage}
						prevButtonDisabled={prevButtonDisabled}
						{...props}
					/>
		</div>
	) :
	(
		<div className="loader-container">
			<LoaderSpinner />
		</div>
	);
}
