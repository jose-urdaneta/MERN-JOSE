import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Mensaje.css";
import "./components/Mensaje";
import "./components/MiTarjeta";

// function App() {
//   return (
//     <>
//       <h1>Bienvenido a mi aplicacion React</h1>
//       <h2 style={{ color: "cyan" }}>Lista de Cosas por hacer</h2>

//       <p>Aprender React</p>
//       <p>Practicar con Vite</p>
//       <p>Contruir Proyectos Increibles</p>
//     </>
//   );
// }

const App = () => {
  const nombre = "Juan Pérez";
  const edad = 30;
  const usuario = {
    nombreUsuario: "juanperez",
    correo: "juan@ejemplo.com",
  };

  const pasatiempos = ["Leer", "Jugar videojuegos", "Senderismo"];
  const { nombreUsuario, correo } = usuario;
  const [primerPasatiempo, segundoPasatiempo, tercerPasatiempo] = pasatiempos;

  return (
    <>
      <p>{nombre}</p>
      <p>{edad}</p>
      <p>{nombreUsuario}</p>
      <p>{correo}</p>
      <p>{primerPasatiempo}</p>
      <p>{segundoPasatiempo}</p>
      <p>{tercerPasatiempo}</p>
    </>
  );
};

export default App;
