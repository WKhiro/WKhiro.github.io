import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import cat from '../assets/newI.png';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    text-shadow: 2px 2px 5px red;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }
  .navbar-brand {
    display: flex;
    align-items: center;
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><a href="/"><img src={cat}/>Wesley</a></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link><Link to="/" >Home</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><Link to="/about">About</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link><Link to="/contact">Contact</Link></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
