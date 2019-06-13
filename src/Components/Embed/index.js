import React, { Component } from "react";
import Snippet from "../Snippet";

class Embed extends Component {
  render() {
    const stagingCode = `<script src="//assets.adobedtm.com/launch-ENc379233258344e5ab0033464ce7e8d21-staging.min.js" async></script>;`;
    const productionCode = stagingCode.replace("-staging", "");
    return (
      <div>
        <h3>Embedding Launch</h3>
        <p>
          The Launch javascript snippet loads the Launch library on a page load.
          The script should be loaded in the global head as high as possible.
          Each page requires one script, but the scripts differs based on
          environment: there is one for the <b>production environment</b>, and
          one for <b>all non-production environments.</b> It is recommended that
          you load the library asychronously.
        </p>
        <h4 className="push">Non-Production</h4>
        <p>
          This is an <b>EXAMPLE</b> of a Launch script to be placed in{" "}
          <b>non-production</b> environments. Note the async attribute and
          "-staging" flag in the file.
        </p>
        <Snippet code={stagingCode} />
        <h4 className="push">Production</h4>
        <p>
          This is an <b>EXAMPLE</b> of a Launch script to be placed in a{" "}
          <b>production</b> environment. Note the async attribute and{" "}
          <b>lack of</b> "-staging" flag in the file.
        </p>
        <Snippet code={productionCode} />
        <h4 className="push">Video Tutorial</h4>
        <div>
          <iframe
            title="embed tutorial video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/oToBytC9QDE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default Embed;
