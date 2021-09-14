import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./ItemCounter.css";

export default function ItemCounter(props) {
	const {
		currentQuantity,
		maxQuantity,
		substractItem,
		addItem,
		substractButtonIsDisabled,
		addButtonIsDisabled,
		onInput,
		variant,
	} = props;

	return (
		<InputGroup className="quantity-input-group">
			<button
				className={variant ? "btn btn-" + variant : "btn btn-outline-light"}
				onClick={substractItem}
				disabled={substractButtonIsDisabled}
			>
				{<AiOutlineMinus />}
			</button>
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
			<button
				className={variant ? "btn btn-" + variant : "btn btn-outline-light"}
				onClick={addItem}
				disabled={addButtonIsDisabled}
			>
				{<AiOutlinePlus />}
			</button>
		</InputGroup>
	);
}
