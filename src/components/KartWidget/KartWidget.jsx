import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import { AiOutlineShopping } from "react-icons/ai";
import Badge from '@uiw/react-badge';

export default function KartWidget(props) {
	const { kartItemCount } = props;

	return (
		<Badge className={kartItemCount <= 0 ? "hidden-kart-badge" : ""}  count={kartItemCount}>	
			<BaseButton
				label={<AiOutlineShopping />}
				variant="outline-light"
			></BaseButton>
		</Badge>
	);
}
