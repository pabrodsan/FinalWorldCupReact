import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { useHistory } from "react-router-dom";
import {TITLE, SCORE_BOARD_NAV, SUMMARY_NAV} from '../../constants/Constants';

function NavbarComponent() {
    const history = useHistory();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >{TITLE}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav  className="mr-auto">
                    <Nav.Link onClick={() => history.push('/')}>{SCORE_BOARD_NAV}</Nav.Link>
                    <Nav.Link onClick={() => history.push('/summary')}>{SUMMARY_NAV}</Nav.Link>
                </Nav >
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent
