import { React } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import cardImg from "../../img/cardProto.jpg";
import "./Item.css";

export default function ItemCard(props) {
	const {
		itemLabel,
		imgSource,
		itemId,
	} = props;

	return (
		<Card bg="secondary">
				<Card.Img
					className="card-image"
					variant="top"
					src={imgSource ? imgSource : cardImg}
				/>
			<Card.Body>
				<Card.Title>{itemLabel}</Card.Title>
				<Link className="btn btn-outline-light detail-button" to={`/item/${itemId}`}>
					Ver más
				</Link>
			</Card.Body>
		</Card>
	);
}
