import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout from "./layout/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App children={<Layout />} />
  </StrictMode>
);
