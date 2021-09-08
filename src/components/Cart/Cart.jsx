import React from "react";
import CartList from "../CartList/CartList";
import UserDataForm from "../UserDataForm/UserDataForm";
import CartResume from "../CartResume/CartResume";
import AddSomethingView from "../AddSomethingView/AddSomethingView";
import SuccessfulOrderView from "../SuccessfulOrderView/SuccessfulOrderView";
import { Row, Col } from "react-bootstrap";
import "./Cart.css";


export default function Cart(props) {
	const { orderCreatedSuccessfully, clearOrderAndCart, cartItemCount, generateOrder, formShow, setFormShow } = props;

	return orderCreatedSuccessfully ? (
		<SuccessfulOrderView orderId={orderCreatedSuccessfully} clearOrderAndCart={clearOrderAndCart} />
	) : cartItemCount > 0 ? (
		<Row className="cart">
			<Col xs={8}>
				{formShow ? <UserDataForm /> : <CartList />}
			</Col>
			<Col xs={4}>
				<CartResume generateOrder={generateOrder} formShow={formShow} setFormShow={setFormShow} />
			</Col>
		</Row>
	) : (
		<AddSomethingView />
	);
}
