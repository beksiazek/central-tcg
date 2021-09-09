import React from "react";
import CartList from "../CartList/CartList";
import UserDataForm from "../UserDataForm/UserDataForm";
import CartResume from "../CartResume/CartResume";
import AddSomethingView from "../AddSomethingView/AddSomethingView";
import SuccessfulOrderView from "../SuccessfulOrderView/SuccessfulOrderView";
import { Row, Col } from "react-bootstrap";
import "./Cart.css";


export default function Cart(props) {
	const { orderCreatedSuccessfully, clearOrderAndCart, cartItemCount, finishPurchase, formShow, setFormShow, userDataStates } = props;

	return orderCreatedSuccessfully ? (
		<SuccessfulOrderView orderId={orderCreatedSuccessfully} clearOrderAndCart={clearOrderAndCart} />
	) : cartItemCount > 0 ? (
		<Row className="cart">
			<Col xs={8}>
				{formShow ? <UserDataForm userDataStates={userDataStates} /> : <CartList />}
			</Col>
			<Col xs={4}>
				<CartResume finishPurchase={finishPurchase} formShow={formShow} setFormShow={setFormShow} />
			</Col>
		</Row>
	) : (
		<AddSomethingView />
	);
}
