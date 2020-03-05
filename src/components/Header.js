import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import {Navbar, NavItem, Nav} from "react-bootstrap";

class Header extends React.Component {
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand >KBInvest</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto color-nav">
                <Nav.Link as={Link} to="/products">Home</Nav.Link>
            </Nav>
            <Nav>
                <NavItem className="Nav-item">
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </NavItem>
                <NavItem className="Nav-item">
                    <Nav.Link className="Nav-link" as={Link} to="/about">About us</Nav.Link>
                </NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
    
export default Header;