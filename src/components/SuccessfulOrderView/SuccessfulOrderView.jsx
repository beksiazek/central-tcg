import React from "react";
import { Link } from "react-router-dom";
import DefaultView from "../DefaultView/DefaultView";
import { IoBagCheckOutline } from "react-icons/io5";

export default function SuccessfulOrderView(props) {
	const { orderId, clearOrderAndCart } = props;

	return (
		<DefaultView className="wide-margin">
            <IoBagCheckOutline className="view-icon" />
			<h1>Tu compra fue realizada con éxito!</h1>
			<h4>El número de orden correspondiente es:</h4>
			<h3>{orderId}</h3>
			<Link to="/">
                <button className="btn btn-outline-info" onClick={clearOrderAndCart}>Volver a la tienda</button>
			</Link>
		</DefaultView>
	);
}
