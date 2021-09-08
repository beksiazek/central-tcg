import { React, useContext } from "react";
import cartContext from "../../context/cartContext";
import "./CartResume.css";

export default function CartResume(props) {
	const { clearCart } = useContext(cartContext);
	const { formShow, setFormShow, generateOrder } = props;

	return (
		<div className="cart-resume">
			<h1>Resumen</h1>
			<div>
				<h1>Total:</h1>
				<h1>
					$
					<cartContext.Consumer>
						{({ cartTotal }) => cartTotal.toFixed(2)}
					</cartContext.Consumer>
				</h1>
			</div>
			{formShow ? (
				<button
					className="pay-button btn btn-success"
					onClick={generateOrder}
				>
					Finalizar compra
				</button>
			) : (
				<button
					className="pay-button btn btn-success"
					onClick={() => setFormShow(true)}
				>
					Completar datos
				</button>
			)}
			<button
				className="clear-cart-button btn btn-outline-danger"
				onClick={clearCart}
			>
				Vaciar carrito
			</button>
		</div>
	);
}
