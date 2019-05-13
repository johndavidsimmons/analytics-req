import React, { Component } from "react";
import { Col, Row, Image } from "react-bootstrap";

const Adobe = () => (
  <div>
    <h3>Adobe Analytics/Adobe Launch</h3>
    <Row className="push-bottom">
      <Col xs={1}>
        <Image
          className="logo"
          src="https://assets.adobedtm.com/extensions/EP4c3fcccffd524251ae198bf677f3b6e9/resources/icons/mc_analytics.svg"
        />
      </Col>
      <Col xs={1}>
        <Image
          className="logo"
          src="https://assets.adobedtm.com/extensions/EP04617b99e04841b9991487d04c8db46c/resources/icons/core.svg"
        />
      </Col>
    </Row>
    <p>
      Quicken Loans runs a web analytics stack centered around{" "}
      <a href="//www.adobe.com/experience-platform/launch.html" target="_blank">
        Adobe Launch
      </a>{" "}
      (formerly DTM) for data collection and{" "}
      <a
        href="https://www.adobe.com/analytics/adobe-analytics.html"
        target="_blank"
      >
        Adobe Analytics
      </a>{" "}
      for reporting.
    </p>
    <p>
      <b>Launch</b> has two primary functions:
    </p>
    <ul>
      <li>
        Collect data from a website and send it to <b>Adobe Analytics</b>.
      </li>
      <li>
        Load vendor code or other code unrelated to the core application.
        Examples include Facebook marketing code and the Live Engage Chat
        library. This process is referred to as <b>tag management</b>.
      </li>
    </ul>
    <p>
      Please note that the collection of web analytics is <b>not</b> automatic
      and must be configured on a per property basis. Typically, <b>Launch</b>{" "}
      properties (collections of analytics rules) are segmented by codebase,
      rather than domain. The data collected by a property is determined by its
      various stakeholders.
    </p>
    <h4>Accounts</h4>
    <p>
      An Adobe Experience Cloud ID is required to access Adobe Analytics and
      Adobe Launch. If you need access to these tools please send an email to{" "}
      <strong>digitaldatastrategy@quickenloans.com</strong> with your role and
      which product you work on.
    </p>
  </div>
);

const Google = () => (
  <div>
    <h3>Google Analytics</h3>
    <Image
      className="logo"
      src="https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png"
    />
    <p>
      We load Google Analytics on a few client facing websites in order to
      utilize Google's advertising capabilities. We also use Google Analytics on
      internal sites because it generally requires less setup than Adobe
      Analytics. To use Google Analytics on your internal facing website, send
      me email to digitaldatastrategy@quickenloans.com.
    </p>
    <h4>Accounts</h4>
    <p>
      A Google Account is required to access Google Analytics. You will need to
      link your Quickenloans.com email address to this Google Account. You can
      do this by adding your @quickenloans.com email address as an alernate
      email address on your Google account. This can be done at{" "}
      <a href="https://myaccount.google.com/personal-info">
        https://myaccount.google.com/personal-info
      </a>{" "}
      > email > alternate email.
    </p>
  </div>
);

const Accounts = () => (
  <div>
    <h3>Accounts</h3>
    <p>
      <strong>Adobe Analytics/Launch</strong>
    </p>
    <p>
      An Adobe Experience Cloud ID is required to access Adobe Analytics and
      Adobe Launch. If you need access to these tools please send an email to{" "}
      <strong>digitaldatastrategy@quickenloans.com</strong> with your role and
      which product you work on.
    </p>
    <p>
      <strong>Google Analytics</strong>
    </p>
  </div>
);

class Tools extends Component {
  render() {
    return (
      <div>
        <Adobe />
        <hr />
        <Google />
      </div>
    );
  }
}

export default Tools;
