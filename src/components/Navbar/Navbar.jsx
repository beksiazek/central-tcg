import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

export default function NavbarComponent(props) {
	const { brandName, children, rightElement } = props;

	return (
		<Navbar className="base-nav" variant="dark">
			<Container>
				<Navbar.Brand href="#home">{`${brandName}`}</Navbar.Brand>
				<Navbar.Toggle />
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/shop">Tienda</Nav.Link>
					<Nav.Link as={Link} to="/trading">Intercambio</Nav.Link>
					<Nav.Link href="#mi-lista">Mi Lista</Nav.Link>
				</Nav>
				<Nav>{children}</Nav>
				<Navbar.Collapse className="justify-content-end">
					<Nav>{rightElement}</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
