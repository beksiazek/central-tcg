import { React, useState } from "react";

export default function BaseInput(props) {
	const { type, id, placeholder, value, onChange, isInvalid } = props;

	const [isPristine, setIsPristine] = useState(true);

	return (
		<input
			type={type}
			id={id}
			placeholder={placeholder}
			value={value}
			onChange={(e) => {
				setIsPristine(false);
				onChange(e.target.value);
			}}
			className={isInvalid && !isPristine ? "invalid" : ""}
		/>
	);
}
