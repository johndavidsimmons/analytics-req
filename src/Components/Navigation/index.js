import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand>Web Analytics Standards</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink to="/" className="nav-link">
        Overview
      </NavLink>
      <NavDropdown title="Launch" id="launch-nav-dropdown">
        <NavLink to="/embed" className="dropdown-item">
          Embed
        </NavLink>
        <NavLink to="/tagging" className="dropdown-item">
          Tagging
        </NavLink>
        <NavDropdown.Divider />
        <NavDropdown.Item
          href="//docs.adobelaunch.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official Documentation
        </NavDropdown.Item>
      </NavDropdown>
      <NavLink to="/datalayer" className="nav-link">
        Data Layer
      </NavLink>
    </Nav>
  </Navbar>
);

export default Navigation;
