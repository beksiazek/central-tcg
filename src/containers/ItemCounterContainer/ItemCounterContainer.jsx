import React from "react";
import ItemCounter from "../../components/ItemCounter/ItemCounter";

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
			: value < 1
			? setCurrentQuantity(1)
			: value > maxQuantity
			? setCurrentQuantity(maxQuantity)
			: setCurrentQuantity(Number(value));
	}

	return (
		<ItemCounter
			addItem={addItem}
			substractItem={substractItem}
			currentQuantity={currentQuantity}
			maxQuantity={maxQuantity}
			setCurrentQuantity={setCurrentQuantity}
			substractButtonIsDisabled={currentQuantity <= 1}
			addButtonIsDisabled={currentQuantity >= maxQuantity}
			onInput={onInput}
		/>
	);
}
