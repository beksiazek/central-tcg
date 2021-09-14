import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React from "react";

export default function LoaderSpinner(props) {
	const { width, height } = props;

	return (
		<Loader
			type="Puff"
			color="#00BFFF"
			height={height || 100}
			width={width || 100}
			timeout={3000}
		/>
	);
}
