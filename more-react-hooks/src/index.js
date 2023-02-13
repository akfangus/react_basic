import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import AppMemoization from "./AppMemoization";
// import AppUseRef from "./AppUseRef";
import AppUseContext from "./AppUseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /**
   *   <React.StrictMode>
    <App />

    메모 3개
    <AppMemoization />

    useREF
  
  </React.StrictMode>
   */
  // <AppUseContext />
  <AppUseRef />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
