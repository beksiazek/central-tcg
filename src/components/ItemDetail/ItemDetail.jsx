import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ItemCounter from "../../containers/ItemCounterContainer/ItemCounterContainer";
import BaseButton from "../BaseButton/BaseButton";
import "./ItemDetail.css";

export default function ItemDetail(props) {
	const {
		item,
		setCheckButtonIsDisabled,
		onAddToKart,
		checkButtonIsDisabled,
	} = props;
	const star = "⭐";

	return (
		<div>
			<Row className="detail-container">
				<Col className="detail-image-container">
					<img
						className="card-image"
						alt="Card"
						src={item.card_images[0].image_url}
					></img>
				</Col>
				<Col>
					<div id="card-detail">
						<h2>{star.repeat(item.level)}</h2>
						<h3>
							{item.race}/{item.type}
						</h3>
						{item.type.includes("Monster") && (
							<h4>
								ATK/{item.atk} DEF/{item.def}
							</h4>
						)}
						<h4>Descripción/Efecto:</h4>
						<p id="card-desc">{item.desc}</p>
						<h1>${item.card_prices[0].tcgplayer_price}</h1>
						<h4 className="unit">xU.</h4>
						<div className="add-to-kart-container">
							<ItemCounter
								setCheckButtonIsDisabled={
									setCheckButtonIsDisabled
								}
								{...props}
							/>
							<BaseButton
								label="Agregar al carrito"
								variant="success"
								onClick={onAddToKart}
								isDisabled={checkButtonIsDisabled}
							></BaseButton>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
