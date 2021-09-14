import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";
import { GiCardExchange } from "react-icons/gi";

export default function NavbarComponent(props) {
	const { brandName, children, rightElement } = props;

	return (
		<Navbar className="base-nav" variant="dark">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<GiCardExchange className="brand-icon" />
					{`${brandName}`}
				</Navbar.Brand>
				<Navbar.Toggle />
				<Nav className="me-auto">
					<Nav.Link as={Link} to="/category/monster">
						Monsters
					</Nav.Link>
					<Nav.Link as={Link} to="/category/spell">
						Spells
					</Nav.Link>
					<Nav.Link as={Link} to="/category/trap">
						Traps
					</Nav.Link>
				</Nav>
				<Nav>{children}</Nav>
				<Navbar.Collapse className="justify-content-end">
					<Nav>{rightElement}</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
