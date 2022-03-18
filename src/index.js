import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Headphones from "./pages/headphones.jsx";
import Headphone from "./pages/headphone.jsx"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Headphones />} />
      <Route path=":headphoneId" element={<Headphone />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();