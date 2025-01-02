import React from "react";
import ReactDOM from "react-dom/client";

const heading = [
  React.createElement("h1", {}, "Hello We are react enginners"),
  React.createElement("h4", {}, "heybaba"),
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
