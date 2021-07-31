import React from "react";
import BaseButton from "../BaseButton/BaseButton";
import { AiOutlineShopping } from "react-icons/ai";

export default function KartWidget() {
	return (
		<BaseButton
			label={<AiOutlineShopping />}
			variant="outline-light"
		></BaseButton>
	);
}
