import { React, useState, useContext } from "react";
import cartContext from "../../context/cartContext";
import Cart from "../../components/Cart/Cart";
import { firestore } from "../../firebase/firebase";
import firebase from "firebase/app";

const db = firestore;
const ordersCollection = db.collection("orders");
const productsCollection = db.collection("products");

export default function CartContainer() {
	const { cartItemCount, cartItemList, cartTotal, clearCart } =
		useContext(cartContext);
	const [formShow, setFormShow] = useState(false);
	const [orderCreatedSuccessfully, setOrderCreatedSuccessfully] =
		useState(false);
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const userDataStates = {
		name: { value: userName, setter: setUserName },
		email: { value: email, setter: setEmail },
		phone: { value: phoneNumber, setter: setPhoneNumber },
	};

	function formIsValid() {
		return (
			userName !== "" &&
			/^[^@]+@[^@]+\.[^@]+$/.test(email) &&
			/^\+?[0-9]{3}-?[0-9]{6,12}$/.test(phoneNumber)
		);
	}

	function generateOrder() {
		const orderItems = cartItemList.map((product) => ({
			id: product.item.id,
			name: product.item.name,
			price: product.item.card_prices[0].tcgplayer_price,
			quantity: product.quantity,
		}));
		const newOrder = {
			buyer: {
				name: userName || "Tester",
				phone: phoneNumber || "1122334455",
				email: email || "test@test.test",
			},
			items: orderItems,
			date: firebase.firestore.Timestamp.fromDate(new Date()),
			total: parseFloat(cartTotal.toFixed(2)),
		};

		ordersCollection
			.add(newOrder)
			.then(({ id }) => {
				orderItems.forEach((item) => {
					productsCollection
						.doc(item.id.toString())
						.update(
							"stock",
							firebase.firestore.FieldValue.increment(
								-item.quantity
							)
						)
						.catch((error) => {
							console.error("Error updating document: ", error);
						});
				});

				setOrderCreatedSuccessfully(id);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function finishPurchase() {
		formIsValid() && generateOrder();
	}

	function clearOrderAndCart() {
		setOrderCreatedSuccessfully(false);
		clearCart();
	}

	return (
		<Cart
			orderCreatedSuccessfully={orderCreatedSuccessfully}
			clearOrderAndCart={clearOrderAndCart}
			cartItemCount={cartItemCount}
			formShow={formShow}
			setFormShow={setFormShow}
			userDataStates={userDataStates}
			finishPurchase={finishPurchase}
		/>
	);
}
