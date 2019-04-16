import React, { Component } from "react";

const Adobe = () => (
  <div>
    <h3>Adobe Analytics/Adobe Launch</h3>
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
  </div>
);

const Google = () => (
  <div>
    <h3>Google Analytics</h3>
    <p>Here is some content about how we use google analytics</p>
  </div>
);

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Web Analytics Standards</h1>
        <h2>The Tools</h2>
        <Adobe />
        <Google />
      </div>
    );
  }
}

export default Header;
