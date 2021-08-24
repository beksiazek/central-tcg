import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../../components/ItemList/ItemList";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import { firestore } from "../../firebase/firebase";

const db = firestore;
const productsCollection = db.collection("products");

export default function Shop(props) {
	const { categoryId } = useParams();
	const [items, setItems] = useState([]);
	const [offset, setOffset] = useState(0);
	const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);

	useEffect(() => {
		categoryId ? 
		productsCollection
			.where("type", "==", decodeURI(categoryId))
			.get()
			.then((snapshot) => {
				let docs = [];
				snapshot.forEach((doc) => {
					docs.push(doc.data())
				});
				setItems(docs);
			})
			.catch((err) => {
				console.log("No se pudo completar la petición.", err);
			})
		: productsCollection
			.get()
			.then((snapshot) => {
				let docs = [];
				snapshot.forEach((doc) => {
					docs.push(doc.data())
				});
				setItems(docs);
			})
			.catch((err) => {
				console.log("No se pudo completar la petición.", err);
			});

		setPrevButtonDisabled(offset < 4);
	}, [categoryId, offset]);

	function prevPage() {
		setOffset(offset - 4);
	}

	function nextPage() {
		setOffset(offset + 4);
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
	) : (
		<div className="loader-container">
			<LoaderSpinner />
		</div>
	);
}
