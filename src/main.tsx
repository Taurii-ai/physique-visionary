import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

// Force deployment trigger - Physique AI v1.0.0
console.log("🚀 Physique AI - Custom Favicon Deployment v1.0.0");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
