// src/main.jsx
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
