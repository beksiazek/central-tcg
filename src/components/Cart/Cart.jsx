import { React, useState, useContext } from "react";
import cartContext from "../../context/cartContext";
import CartList from "../CartList/CartList";
import CartResume from "../CartResume/CartResume";
import AddSomethingView from "../AddSomethingView/AddSomethingView";
import SuccessfulOrderView from "../SuccessfulOrderView/SuccessfulOrderView";
import { Row, Col } from "react-bootstrap";
import "./Cart.css";
import { firestore } from "../../firebase/firebase";
import firebase from "firebase/app";

const db = firestore;
const ordersCollection = db.collection("orders");

export default function Cart() {
	const { cartItemCount, cartItemList, cartTotal } = useContext(cartContext);
	const [orderCreatedSuccessfully, setOrderCreatedSuccessfully] =
		useState(false);

	function generateOrder() {
		const orderItems = cartItemList.map((product) => ({
			id: product.item.id,
			name: product.item.name,
			price: product.item.card_prices[0].tcgplayer_price,
			quantity: product.quantity,
		}));
		const newOrder = {
			buyer: {
				name: "Tester",
				phone: "1122334455",
				email: "test@test.test",
			},
			items: orderItems,
			date: firebase.firestore.Timestamp.fromDate(new Date()),
			total: parseFloat(cartTotal.toFixed(2)),
		};

		ordersCollection
			.add(newOrder)
			.then(({ id }) => {
				setOrderCreatedSuccessfully(id);
				console.log("Su orden fue completada con éxito!", id);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return cartItemCount > 0 ? (
		orderCreatedSuccessfully ? (
			<SuccessfulOrderView orderId={orderCreatedSuccessfully} />
		) : (
			<Row className="cart">
				<Col xs={8}>
					<CartList />
				</Col>
				<Col xs={4}>
					<CartResume generateOrder={generateOrder} />
				</Col>
			</Row>
		)
	) : (
		<AddSomethingView />
	);
}
