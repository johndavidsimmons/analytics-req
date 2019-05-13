import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Embed from "./Components/Embed";
import Navigation from "./Components/Navigation";
import Tagging from "./Components/Tagging";
import Tools from "./Components/Tools";
import DataLayer from "./Components/DataLayer";

import "./App.scss";

import { HashRouter, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

class App extends Component {
  constructor() {
    super();

    // Init GA repo
    ReactGA.initialize("UA-72067721-3");

    // send GA Pageviews on history changes
    const history = createBrowserHistory();
    history.listen(this.sendPageview);
  }

  componentDidMount() {
    // Page view on initial load
    this.sendPageview();
  }

  sendPageview() {
    const page = window.location.hash.replace("#", "");
    ReactGA.pageview(page);
  }

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
