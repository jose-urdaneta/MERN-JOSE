import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Mensaje from "./components/Mensaje.jsx";
import MiTarjeta from "./components/MiTarjeta.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Mensaje />
    <MiTarjeta />
  </StrictMode>
);
