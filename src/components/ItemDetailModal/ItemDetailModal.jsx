import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ItemDetailModal.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductDetailModal(props) {
	const { show, setShow, item } = props;
	const star = "⭐";

	return item ? (
		<Modal
			show={show}
			dialogClassName="modal-fullscreen"
			onHide={() => setShow(false)}
		>
			<Modal.Header>
				<Modal.Title>{item.name}</Modal.Title>
				<Button
					className="btn-close"
					onClick={() => setShow(false)}
				></Button>
			</Modal.Header>
			<Modal.Body>
			<Row>
				<Col className="modal-image-container">
					<img alt="Card image" src={item.card_images[0].image_url}></img>
				</Col>
				<Col>
					<div id="card-detail">
						<h2>{star.repeat(item.level)}</h2>
						<h3>{item.race}/{item.type}</h3>
						<h4>ATK/{item.atk}  DEF/{item.def}</h4>
						<h4>Descripción/Efecto:</h4>
						<p id="card-desc">{item.desc}</p>
					</div>
				</Col>
			</Row>
			</Modal.Body>
		</Modal>
	) : (
		<Modal
			show={show}
			dialogClassName="modal-fullscreen"
			onHide={() => setShow(false)}
		>
			<Modal.Header>
				<Modal.Title>Cargando...</Modal.Title>
				<Button
					className="btn-close"
					onClick={() => setShow(false)}
				></Button>
			</Modal.Header>
			<Modal.Body></Modal.Body>
		</Modal>
	);
}
