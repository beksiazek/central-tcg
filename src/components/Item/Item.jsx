import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import "./Item.css";

export default function ItemCard(props) {
	const { itemLabel, imgSource, itemId, hasStock } = props;

	const [isLoadingImg, setIsLoadingImg] = useState(true);

	useEffect(() => {
		const img = new Image();
		img.src = imgSource;
		img.onload = () => {
			setIsLoadingImg(false);
		};
	}, [imgSource]);

	return (
		<Card bg="secondary">
			{isLoadingImg ? (
				<div className="img-placeholder">
					<LoaderSpinner />
				</div>
			) : (
				<div className="card-image-container">
					<Card.Img
						className={`card-image ${hasStock ? "" : "no-stock-image"}`}
						variant="top"
						src={imgSource}
					/>
					{!hasStock && <h3 className="no-stock-text">Sin Stock</h3>} 
				</div>
			)}
			<Card.Body>
				<Card.Title>{itemLabel}</Card.Title>
				<Link
					className="btn btn-outline-light detail-button"
					to={`/item/${itemId}`}
				>
					Ver más
				</Link>
			</Card.Body>
		</Card>
	);
}
