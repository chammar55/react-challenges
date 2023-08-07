import React from "react";
import ReactDOM from "react-dom/client";
import "./AccordionV1.css";
// import MyTabs from "./MyTabs.js";
import CurrencyConverter from "./CurrencyConverter.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CurrencyConverter />
  </React.StrictMode>
);
