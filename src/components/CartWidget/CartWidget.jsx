import { React, useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../context/cartContext";
import BaseButton from "../BaseButton/BaseButton";
import { AiOutlineShopping } from "react-icons/ai";
import { RiDeleteBackLine } from "react-icons/ri";
import Badge from "@uiw/react-badge";
import "./CartWidget.css";

export default function CartWidget() {
	const { cartItemCount, clearCart } = useContext(cartContext);

	return (
		cartItemCount > 0 && (
			<>
				<Link to="/cart">
					<Badge count={cartItemCount}>
						<BaseButton
							label={<AiOutlineShopping />}
							variant="outline-light"
						></BaseButton>
					</Badge>
				</Link>
			</>
		)
	);
}
