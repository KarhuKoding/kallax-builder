import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
