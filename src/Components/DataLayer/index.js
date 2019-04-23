import React from "react";

const DataLayer = () => {
  return (
    <div>
      <h3>Data Layer</h3>
      <p>
        The data layer JavaScript object that contains information about the
        current state of the application. This typically includes page
        information such as the URL or query parameters and user information
        such as the current user's username. It exists in order to streamline
        analytics collection by reducing the need to scrape the page or run
        redundant functions.
      </p>
      <p>
        <a href="https://www.w3.org/2013/12/ceddl-201312.pdf" target="_blank">
          More information on data layers can be found here
        </a>
      </p>
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
