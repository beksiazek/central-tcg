import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import QuantitySelector from "../../containers/QuantitySelector/QuantitySelector";
import BaseButton from "../BaseButton/BaseButton";
import cardImg from "../../img/cardProto.jpg";
import "./ItemCard.css";

export default function ItemCard(props) {
	const {
		itemLabel,
		buttonLabel,
		currentQuantity,
		maxQuantity,
		onAddToKart,
		imgSource,
		itemId,
		url,
	} = props;
	const [checkButtonIsDisabled, setCheckButtonIsDisabled] = useState(true);

	useEffect(
		() =>
			setCheckButtonIsDisabled(
				currentQuantity <= 0 || currentQuantity > maxQuantity
			),
		[currentQuantity]
	);

	return (
		<Card bg="secondary">
			<Link to={`${url}/${itemId}`}>
				<Card.Img
					className="card-image"
					variant="top"
					src={imgSource ? imgSource : cardImg}
				/>
			</Link>
			<Card.Body>
				<Card.Title>{itemLabel}</Card.Title>
				<QuantitySelector
					setCheckButtonIsDisabled={setCheckButtonIsDisabled}
					{...props}
				/>
				<BaseButton
					label={buttonLabel}
					variant="success"
					onClick={onAddToKart}
					isDisabled={checkButtonIsDisabled}
				></BaseButton>
			</Card.Body>
		</Card>
	);
}
