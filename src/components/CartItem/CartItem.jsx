import { React, useState, useEffect, useContext } from "react";
import cartContext from "../../context/cartContext";
import { Row, Col } from "react-bootstrap";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import ItemCounter from "../../containers/ItemCounterContainer/ItemCounterContainer";
import { BiTrashAlt } from "react-icons/bi";
import "./CartItem.css";

export default function CartItem(props) {
	const { item, quantity } = props;

	const { setItemQuantityFromCart, removeItemFromCart } = useContext(cartContext);

	const [isLoadingImg, setIsLoadingImg] = useState(true);

	useEffect(() => {
		const img = new Image();
		img.src = item.card_images[0].image_url_small;
		img.onload = () => {
			setIsLoadingImg(false);
		};
	}, [item.card_images]);

	return (
		<Row className="cart-item">
			<Col sm={2} xs={6} className="list-item-field">
				{isLoadingImg ? (
					<div className="cart-item-image">
						<LoaderSpinner width={50} height={50} />
					</div>
				) : (
					<img
						className="cart-item-image"
						alt="card small"
						src={item.card_images[0].image_url_small}
					/>
				)}
			</Col>
			<Col sm={4} xs={6} className="list-item-field">
				{item.name}
			</Col>
			<Col sm={3} xs={6} className="list-item-field">
				<ItemCounter
					variant="outline-dark"
					maxQuantity={3}
					currentQuantity={quantity}
					setCurrentQuantity={(quantity) => {setItemQuantityFromCart(item, quantity)}}					
				/>
			</Col>
			<Col sm={2} xs={6} className="list-item-field">
				Subtotal: $
				{(item.card_prices[0].tcgplayer_price * quantity).toFixed(2)}
			</Col>
			<Col sm={1} xs={3} className="list-item-field delete-item">
				<BiTrashAlt onClick={() => {removeItemFromCart(item.id)}}/>
			</Col>
		</Row>
	);
}
