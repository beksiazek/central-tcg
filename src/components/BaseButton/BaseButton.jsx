import React from "react";
import Button from "react-bootstrap/Button";

export default function BaseButton(props) {
	const { label, variant, onClick, isDisabled } = props;

	return (
		<Button variant={variant} onClick={onClick} disabled={isDisabled}>
			{label}
		</Button>
	);
}
