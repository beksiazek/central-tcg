import { React, useState, useContext } from "react";
import cartContext from "../../context/cartContext";
import Cart from "../../components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

	const nameIsValid = /^[a-zA-Z\s]*$/.test(userName);
	const emailIsValid = /^[^@]+@[^@]+\.[^@]+$/.test(email);
	const phoneIsValid = /^\+?[0-9]{8,12}$/.test(phoneNumber);

	const userDataStates = {
		name: { value: userName, setter: setUserName, isInvalid: !nameIsValid },
		email: { value: email, setter: setEmail, isInvalid: !emailIsValid },
		phone: {
			value: phoneNumber,
			setter: setPhoneNumber,
			isInvalid: !phoneIsValid,
		},
	};

	function formIsValid() {
		return nameIsValid && emailIsValid && phoneIsValid;
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
				toast.error(
					"Hubo un error al generar la orden de compra! Por favor inténtalo de nuevo más tarde."
				);
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
		<>
			<Cart
				orderCreatedSuccessfully={orderCreatedSuccessfully}
				clearOrderAndCart={clearOrderAndCart}
				cartItemCount={cartItemCount}
				formShow={formShow}
				setFormShow={setFormShow}
				userDataStates={userDataStates}
				finishPurchase={finishPurchase}
				isDisabledFinishPurchase={!formIsValid()}
			/>
			<ToastContainer
				position="top-center"
				autoClose={false}
				closeOnClick={false}
			/>
		</>
	);
}
