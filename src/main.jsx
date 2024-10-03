// eslint-disable-next-line no-unused-vars
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <div data-theme="dark">
    <App />
  </div>
);
