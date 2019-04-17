import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Tools from "./Components/Tools";
import Embed from "./Components/Embed";
import Tagging from "./Components/Tagging";
import "./App.scss";

const NavComponent = () => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="/">Web Analytics Standards</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#overview">Overview</Nav.Link>
      <NavDropdown title="Launch" id="launch-nav-dropdown">
        <NavDropdown.Item href="#embed">Embedding</NavDropdown.Item>
        <NavDropdown.Item href="#tagging">Click Tracking</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          href="//docs.adobelaunch.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#datalayer">Data Layer</Nav.Link>
    </Nav>
  </Navbar>
);

const SectionComponent = ({ ID, comp }) => (
  <div id={ID} className="push-lg push-bottom">
    <Row>
      <Col sm={12}>{comp}</Col>
    </Row>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <NavComponent />
          <SectionComponent ID="overview" comp={<Tools />} />
          <hr />
          <SectionComponent ID="embed" comp={<Embed />} />
          <hr />
          <SectionComponent ID="tagging" comp={<Tagging />} />
        </Container>
      </div>
    );
  }
}

export default App;
