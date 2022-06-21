// == Import npm
import React from 'react';
import {
  Container, Nav, Navbar, NavDropdown,
} from 'react-bootstrap';

import Logo from '../../../public/image/logo.jpg';

// ==Style
import './header.scss';

// == Composant
const Header = () => (
  <Navbar className="header-navbar">
    <Container>
      <img alt="logo" src={Logo} width="200" className="d-inline-block align-top" />
      <Navbar.Brand href="/home">Home</Navbar.Brand>
      <NavDropdown title="Location" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Le domaine de Valombreuse</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Douceur de Paris</NavDropdown.Item>
      </NavDropdown>
      <Nav className="me-auto">
        <Nav.Link href="/club">Club</Nav.Link>
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

      </Nav>
    </Container>
  </Navbar>
);

// == Export
export default Header;
