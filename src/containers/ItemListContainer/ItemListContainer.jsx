import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../../components/ItemList/ItemList";
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { firestore } from "../../firebase/firebase";

const db = firestore;
const productsCollection = db.collection("products");

const types = {
	spell: ["Spell Card"],
	trap: ["Trap Card"],
	monster: ["Normal Monster", "Effect Monster"],
};

export default function Shop(props) {
	const { categoryId } = useParams();

	const [items, setItems] = useState([]);

	useEffect(() => {
		const $query = categoryId
			? productsCollection.where("type", "in", types[categoryId]).get()
			: productsCollection.get();

		$query
			.then((snapshot) => {
				let docs = [];
				snapshot.forEach((doc) => {
					docs.push(doc.data());
				});
				setItems(docs);
			})
			.catch((err) => {
				toast.error("Hubo un error! Por favor recarga la página o inténtalo de nuevo más tarde.");
			});
	}, [categoryId]);

	return (
		<>
			{items ? (
				<div className="shop-container">
					<ItemList
						categoryId={categoryId}
						items={items}
						{...props}
					/>
				</div>
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
