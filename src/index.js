import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // 🔥 REQUIRED
import { LikesProvider } from "./context/LikesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LikesProvider>
      <App />
    </LikesProvider>
  </React.StrictMode>
);
