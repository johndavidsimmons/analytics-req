import React from "react";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DigitalData = () => <code>digitalData</code>;
const DLreqs = () => (
  <div>
    <ul>
      <li>
        The data layer object should be called <DigitalData />
      </li>
      <li>
        The values in <DigitalData /> should not persist between pages or other
        state changes
      </li>
      <li>
        <DigitalData /> keys should not contain empty values. Key/value pairs
        should be set only when they exist.
      </li>
      <li>
        <DigitalData /> should not contain PII
      </li>
      <li>
        The values in <DigitalData /> should be strings. No integers, booleans,
        arrays, etc.
      </li>
    </ul>
  </div>
);

const DataLayer = () => {
  return (
    <div>
      <h3>Data Layer</h3>
      <p>
        The data layer is a static JavaScript object (called <DigitalData />)
        that contains information about the current state of the application.
        This can include:
      </p>
      <ul>
        <li>Page information such as URL or query parameters</li>
        <li>
          User information such as a username or unique ID (provided the user is
          logged in.
        </li>
        <li>
          Form information such as the loan purpose the user selected on a lead
          form.
        </li>
      </ul>
      <p>
        <strong>
          On it's own, the data layer object does nothing. It exists in order to
          streamline data collection by reducing the need to scrape the page for
          information and to serve as a source of truth for any tool that
          collects front end data.
        </strong>
      </p>
      <Row className="push">
        <Col sm={8}>
          <Figure>
            <Figure.Image src="https://i.imgur.com/TJ5mnmi.png" rounded />
            <Figure.Caption>
              A basic data layer object on Rocketmortgage.com
            </Figure.Caption>
          </Figure>
        </Col>
        <Col sm={4}>
          <DLreqs />
        </Col>
      </Row>
      <hr />
      <h4>To add the data layer to your website...</h4>
      <p>
        <a
          href="https://git.rockfin.com/marketing-web/bi-data-layer"
          target="_blank"
        >
          Quicken Loans data layer library
        </a>
      </p>
    </div>
  );
};

export default DataLayer;
