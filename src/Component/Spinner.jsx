import React from "react";
import "./spinner.styles.css";

let Spinner = () => {
  return (
    <div>
      <div class="container">
        <div class="flex">
          <div class="loader"></div>
        </div>
        <div class="load-text">Loading...</div>
      </div>
    </div>
  );
};

export default Spinner;
