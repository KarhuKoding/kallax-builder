import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

console.warn = () => null;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
