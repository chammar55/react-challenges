import React from "react";
import ReactDOM from "react-dom/client";
import "./AccordionV1.css";
import UseReducerBankStarter from "./UseReducerBankStarter/UseReducerBankStarter";
// import MyTabs from "./MyTabs.js";
// import CurrencyConverter from "./CurrencyConverter.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseReducerBankStarter />
  </React.StrictMode>
);
