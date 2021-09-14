import React from "react";
import "./DefaultView.css";

export default function DefaultView(props) {
	const { children, className } = props;
	return (
		<div className={"default-view-container text " + className}>
			{children}
		</div>
	);
}
