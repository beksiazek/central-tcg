import React from "react";
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
                <Nav.Link href="#tienda">Tienda</Nav.Link>
                <Nav.Link href="#intercambio">Intercambio</Nav.Link>
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

