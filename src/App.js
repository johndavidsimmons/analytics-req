import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Embed from "./Components/Embed";
import Navigation from "./Components/Navigation";
import Tagging from "./Components/Tagging";
import Tools from "./Components/Tools";
import DataLayer from "./Components/DataLayer";

import "./App.scss";

import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Navigation />
          <Container>
            <Row>
              <Col sm={12}>
                <Switch>
                  <Route path="/" component={Tools} exact />
                  <Route path="/embed" component={Embed} />
                  <Route path="/tagging" component={Tagging} />
                  <Route path="/datalayer" component={DataLayer} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </HashRouter>
      </div>
    );
  }
}

export default App;
