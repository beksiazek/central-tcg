import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import BaseButton from "../BaseButton/BaseButton";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./QuantitySelector.css";

export default function QuantitySelector(props) {
	const {
		currentQuantity,
		maxQuantity,
		substractItem,
		addItem,
		substractButtonIsDisabled,
		addButtonIsDisabled,
		onInput
	} = props;

	return (
		<InputGroup className="quantity-input-group">
			<BaseButton
				label={<AiOutlineMinus />}
				variant="outline-light"
				onClick={substractItem}
				isDisabled={substractButtonIsDisabled}
			></BaseButton>
			<FormControl
				type="numeric"
				inputMode="number"
				placeholder="1"
				min={0}
				max={maxQuantity}
				className="quantity-input"
				onChange={(event) => onInput(event, event.target.value)}
				value={currentQuantity}
			/>
			<BaseButton
				label={<AiOutlinePlus />}
				variant="outline-light"
				onClick={addItem}
				isDisabled={addButtonIsDisabled}
			></BaseButton>
		</InputGroup>
	);
}
