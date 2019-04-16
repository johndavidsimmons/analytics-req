import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";

import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
