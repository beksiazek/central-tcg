import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavbarComponent(props) {
    
    const { brandName } = props;

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">{`${brandName}`}</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#tienda">Tienda</Nav.Link>
                <Nav.Link href="#intercambio">Intercambio</Nav.Link>
                <Nav.Link href="#mi-lista">Mi Lista</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    );

}

