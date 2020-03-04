import React from "react";
import {Link} from "react-router-dom";
import {Navbar, NavItem, Nav} from "react-bootstrap";

class Header extends React.Component {
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>KBInvest</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link className= "btn" to="/products">Home</Link>
            </Nav>
            <Nav>
                <NavItem className="btn">
                    <Link className= "btn" to="/contact">Contact</Link>
                </NavItem>
                <NavItem className="btn">
                    <Link className= "btn" to="/about">About us</Link>
                </NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}
    
export default Header;