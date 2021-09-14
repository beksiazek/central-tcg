import { React, useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";
import { AiOutlineShopping } from "react-icons/ai";
import "./CartWidget.css";

export default function CartWidget() {
	const { cartItemCount } = useContext(cartContext);

	return (
		cartItemCount > 0 && (
			<>
				<Link to="/cart">
					<span className="w-badge">
						<button className="btn btn-outline-light">
							{<AiOutlineShopping />}
						</button>
						<sup className="w-badge-count">{cartItemCount}</sup>
					</span>
				</Link>
			</>
		)
	);
}
