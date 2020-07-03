import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav, Badge, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../store/actions/authActions';
import './Header.css';

const Header = (props) => {
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const history = useHistory();

  const user = useSelector((state) => state.user.user);

  const logUserOut = () => {
    dispatch(logout());
  };

  const handleSelect = (eventKey) => {
    history.push('/orders');
  };

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Nav.Link as={Link} to="/">
        <Navbar.Brand className="Header-logo-container">
          <img alt="logo" className="Header-logo" src="./chickenfavicon.png" />
          Meat Store
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto color-nav">
          <Nav.Link as={Link} to="/products">
            Shop
          </Nav.Link>
        </Nav>
        <Nav>
          <NavItem>
            <Nav.Link as={Link} to="/mycart">
              <i className="fas fa-shopping-cart"></i>{' '}
              <Badge variant="light">{cartItems.length}</Badge>
              <span className="sr-only">unread messages</span>
            </Nav.Link>
          </NavItem>
          <NavItem>
            {token ? (
              <NavDropdown title={user} id="nav-dropdown">
                <NavDropdown.Item onClick={handleSelect} eventKey="4.3">
                  View Orders
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logUserOut} eventKey="4.4">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
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
