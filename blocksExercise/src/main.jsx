import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Blocks from "./Components/Blocks.jsx";
import "./Components/BlocksEstilos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Blocks />
  </StrictMode>
);
