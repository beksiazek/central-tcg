import { React, useContext } from 'react';
import cartContext from '../../context/cartContext';
import CartList from "../CartList/CartList";
import CartResume from "../CartResume/CartResume";
import AddSomethingView from "../AddSomethingView/AddSomethingView";
import { Row, Col } from 'react-bootstrap';
import "./Cart.css";

export default function Cart() {
    const { cartItemCount } = useContext(cartContext);

    return (cartItemCount > 0 ?
        <Row className="cart">
            <Col xs={8}><CartList /></Col>
            <Col xs={4}><CartResume /></Col>
        </Row> : <AddSomethingView />
    )
}
