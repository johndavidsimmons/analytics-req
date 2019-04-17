import React from "react";

const Snippet = ({ code }) => (
  <div className="card">
    <div className="card-body">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

export default Snippet;
