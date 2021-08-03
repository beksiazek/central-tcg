import React from "react";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";

export default function QuantitySelectorContainer(props) {
	const { maxQuantity, currentQuantity, setCurrentQuantity } = props;

	function substractItem() {
		setCurrentQuantity(currentQuantity - 1);
	}

	function addItem() {
		setCurrentQuantity(currentQuantity + 1);
	}

	function onInput(event, value) {
		isNaN(value)
			? event.preventDefault()
			: value < 0
			? setCurrentQuantity(0)
			: value > maxQuantity
			? setCurrentQuantity(maxQuantity)
			: setCurrentQuantity(Number(value));
	}

	return (
		<QuantitySelector
			addItem={addItem}
			substractItem={substractItem}
			currentQuantity={currentQuantity}
			maxQuantity={maxQuantity}
			setCurrentQuantity={setCurrentQuantity}
			substractButtonIsDisabled={currentQuantity <= 0}
			addButtonIsDisabled={currentQuantity >= maxQuantity}
			onInput={onInput}
		/>
	);
}
