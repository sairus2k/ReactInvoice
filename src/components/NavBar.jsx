import React from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export const NavBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Toggle />
      <Navbar.Brand>
        <Link to="/">Invoice App</Link>
      </Navbar.Brand>
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <IndexLinkContainer activeHref="active" to="/"><NavItem>Invoices</NavItem></IndexLinkContainer>
        <LinkContainer activeHref="active" to="/products"><NavItem>Products</NavItem></LinkContainer>
        <LinkContainer activeHref="active" to="/customers"><NavItem>Customers</NavItem></LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
