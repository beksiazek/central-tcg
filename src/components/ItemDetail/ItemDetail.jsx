import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ItemDetail.css";

export default function ItemDetail(props) {
	const { item } = props;
	const star = "⭐";

	return (
		<div>
		<Row className="detail-container">
			<Col className="detail-image-container">
				<img className="card-image"
					alt="Card image"
					src={item.card_images[0].image_url}
				></img>
			</Col>
			<Col>
				<div id="card-detail">
					<h2>{star.repeat(item.level)}</h2>
					<h3>
						{item.race}/{item.type}
					</h3>
					<h4>
						ATK/{item.atk} DEF/{item.def}
					</h4>
					<h4>Descripción/Efecto:</h4>
					<p id="card-desc">{item.desc}</p>
				</div>
			</Col>
		</Row>
	</div>
	)
}
