import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import { AiOutlineShopping } from "react-icons/ai";
import { RiDeleteBackLine } from "react-icons/ri";
import Badge from '@uiw/react-badge';
import "./KartWidget.css";

export default function KartWidget(props) {
	const { kartItemCount, setKartItemCount } = props;

	return (
		<>
			<Badge className={kartItemCount <= 0 ? "hidden-kart-badge" : ""}  count={kartItemCount}>	
				<BaseButton
					label={<AiOutlineShopping />}
					variant="outline-light"
				></BaseButton>
			</Badge>
			<div className="kart-clear-container">
				<RiDeleteBackLine onClick={() => setKartItemCount(0)} />
			</div>
		</>
	);
}
