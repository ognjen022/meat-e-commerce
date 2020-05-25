import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navbar, NavItem, Nav, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Header = (props) => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Nav.Link as={Link} to="/products">
        <Navbar.Brand>
          <img className="Header-logo" src="./chickenfavicon.png" /> KBInvest
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto color-nav"></Nav>
        <Nav>
          <NavItem>
            <Nav.Link as={Link} to="/mycart">
              <i className="fas fa-shopping-cart"></i>{' '}
              <Badge variant="light">{cartItems.length}</Badge>
              <span className="sr-only">unread messages</span>
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
