import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import cat from '../assets/favicon.png';
import tester from '../assets/night.jpg';

const Styles = styled.div`
  .navbar {
    min-height: 200px;
    z-index: 1000;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #000;
    /* horizontal-pos, vertical-pos, blur radius, color */
    /*text-shadow: 2px 2px 4px #0066CC;*/

    font-size: 50px;
    font-family: "Varela";
    margin-left: 20px;
    margin-right: 20px;
    &::after {
  display:block;
  content: '';
  border-bottom: solid 3px #019fb6;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  }
    &:hover::after, &.active::after {
      transform: scaleX(1);
    }
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: "Balsamiq Sans";
    text-shadow: 2px 2px 4px #0066CC;
  }
  .spacing {
    margin-right: 10px;
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand className="navbar-brand" href="/"><img className="spacing" src={cat} margin={25}/>WKhiro</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><NavLink className="nav-link" activeClassName="active" exact to="/" >Home</NavLink></Nav.Item>
          <Nav.Item><NavLink className="nav-link" activeClassName="active" to="/about">Blog</NavLink></Nav.Item>
          <Nav.Item><NavLink className="nav-link" activeClassName="active" to="/contact">Projects</NavLink></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
