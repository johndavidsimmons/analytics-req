import React, { Component } from "react";
import Snippet from "../Snippet";

class Tagging extends Component {
  render() {
    const taggedButton = `<button data-analytics-click="rocket:purchase calculator:calculate">Calculate</button>`;
    return (
      <div>
        <h3>Click Tracking</h3>
        <p>
          There are two ways that clicks are tracked in Launch, explicity
          through attribute "tagging" and automatically through a process called
          "Activity Map".
        </p>
        <h4>Explicit click tracking with Attribute tagging</h4>
        <p className="push">
          Placing the attribute{" "}
          <code>data-analytics-click="channel:product:link text"</code> on an
          element will instruct Launch to track clicks on that element and
          record the value of the <code>data-analytics-click</code> attribute.
          Primary buttons (and buttons that execute a non-navigation action)
          should contain a click tracking tag.{" "}
          <code>Channel:product:link text</code> is a generic guideline for the
          value. For example, if the primary button below runs a calculation on
          a purchase calculator on a Rocket Mortgage Page:
        </p>
        <Snippet code={taggedButton} />
        <h4 className="push">Automatic click tracking with Activity Map</h4>
        <p>
          Launch will automatically track clicks on certain elements through a
          process called Activity Map. This is how all other clicks (i.e. those
          that are not tagged) will be collected and sent to reporting. Launch
          will record an Activity Map click events on elements that meet any of
          the following criteria:
        </p>
        <ul>
          <li>Anchor or Area element with an href attribute</li>
          <li>Input element with a value attribute or child text</li>
          <li>Button elements</li>
          <li>
            Any element with an onClick function that sets an s_objectID
            variable (Used if element needs to be tracked by activity map, but
            does not meet any criteria above, Uncommon)
          </li>
        </ul>
        <p>
          <strong>Note:</strong> Button elements with the attribute
          <code>type="button"</code> will NOT be tracked by Activity Map. To
          track clicks on these elements you can replace{" "}
          <code>type="button"</code> with <code>role="button"</code> or{" "}
          <code>submit="button"</code>.
        </p>
      </div>
    );
  }
}

export default Tagging;
