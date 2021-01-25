import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { useHistory } from "react-router-dom";

function NavbarComponent() {
    const history = useHistory();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >Final World Cup</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav  className="mr-auto">
                    <Nav.Link onClick={() => history.push('/')}>Score Board</Nav.Link>
                    <Nav.Link onClick={() => history.push('/summary')}>Summary</Nav.Link>
                </Nav >
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent
