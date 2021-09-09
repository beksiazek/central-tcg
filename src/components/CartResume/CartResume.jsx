import { React, useContext } from "react";
import cartContext from "../../context/cartContext";
import "./CartResume.css";

export default function CartResume(props) {
	const { clearCart } = useContext(cartContext);
	const { formShow, setFormShow, finishPurchase } = props;

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
					className="finish-button btn btn-success"
					onClick={finishPurchase}
				>
					Finalizar compra
				</button>
			) : (
				<div>
					<h4 className="data-fill-label" >Complete los datos de su orden</h4>
					<button
						className=" btn btn-success data-fill-button"
						onClick={() => setFormShow(true)}
					>
						Continuar
					</button>
				</div>
			)}
			<button
				className="btn btn-outline-danger"
				onClick={clearCart}
			>
				Vaciar carrito
			</button>
		</div>
	);
}
