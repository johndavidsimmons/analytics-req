import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Web Analytics Standards</h1>
        <p>
          Quicken Loans runs a web analytics stack centered around{" "}
          <a
            href="//www.adobe.com/experience-platform/launch.html"
            target="_blank"
          >
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
        <p>Launch has two primary functions:</p>
        <ul>
          <li>Collect data from a website and send it to Adobe Analytics.</li>
          <li>
            Load vendor code or other code unrelated to the core application.
            Examples include Facebook marketing code and the Live Engage Chat
            library. This process is referred to as "tag management".
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
