import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export class NavbarComponent extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand >Final World Cup</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav  className="mr-auto">
                        <Nav.Link href="/">Score Board</Nav.Link>
                        <Nav.Link href="/summary">Summary</Nav.Link>
                    </Nav >
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarComponent
