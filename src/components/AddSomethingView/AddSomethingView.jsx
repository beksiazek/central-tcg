import React from "react";
import { Link } from "react-router-dom";
import DefaultView from "../DefaultView/DefaultView";
import { AiOutlineShopping } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

export default function UnderConstructionView() {
	return (
		<DefaultView>
			<Link to="/">
				<p>
					<AiOutlineShopping className="view-icon" />
					<FiArrowRight className="view-icon-secondary" />
				</p>
			</Link>
			<h1>Agrega algunas cartas a tu lista de compras y vuelve!</h1>
		</DefaultView>
	);
}
