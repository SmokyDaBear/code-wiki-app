import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "highlight.js/styles/github.css";
import "./styles/theme.css";
import "./styles/base.css";
import "./styles/critical.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
