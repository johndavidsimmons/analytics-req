import React, { Component } from "react";

class Embed extends Component {
  render() {
    return (
      <div>
        <h3>Embedding Launch</h3>
        <p>
          The Launch javascript snippet loads the Launch library on a page and
          should be loaded in the global head as high as possible. Each page
          requires one snippet, but it differs based on environment: one for the{" "}
          <b>production environment</b>, and one for{" "}
          <b>all non-production environments.</b> It is recommended that you
          load the library asychronously.
        </p>
        <h4>Non-Production</h4>
        <p>
          This is an <b>EXAMPLE</b> of a Launch script to be placed in{" "}
          <b>non-production</b> environments. Note the async attribute and
          "-staging" flag in the file.
        </p>
        <div className="card">
          <div className="card-body">
            <pre>
              <code>
                &lt;script
                src=""//assets.adobedtm.com/launch-ENc379233258344e5ab0033464ce7e8d21-staging.min.js"&gt;&lt;/script&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default Embed;
