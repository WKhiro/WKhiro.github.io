import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import cat from "../assets/favicon.png";

const Styles = styled.div`
  .navbar {
    min-height: 200px;
    z-index: 0;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #2c81af;
    /* horizontal-pos, vertical-pos, blur radius, color */
    /*text-shadow: 2px 2px 4px #0066CC;*/
    font-size: 50px;
    font-family: "Varela";
    margin-left: 20px;
    margin-right: 20px;
    &.active {
      color: #3bafed;
    }
    &:hover {
      color: #3bafed;
    }
    &::after {
      display: block;
      content: "";
      border-bottom: solid 3px #fff;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
    &:hover::after,
    &.active::after {
      transform: scaleX(1);
    }
  }

  .navbar-brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: "Balsamiq Sans";
    text-shadow: 2px 2px 4px blue;
  }

  .spacing {
    margin-right: 10px;
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand className="navbar-brand" as={NavLink} to="/">
        <img className="spacing" src={cat} alt="" margin={25} />
        WKhiro
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/projects"
            >
              Projects
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" to="/blog">
              Blog
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink className="nav-link" activeClassName="active" to="/gaming">
              Gaming
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
