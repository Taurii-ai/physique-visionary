import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

// Force deployment trigger - SculptyAI v1.0.0
console.log("🚀 SculptyAI - Custom Favicon Deployment v1.0.0");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
