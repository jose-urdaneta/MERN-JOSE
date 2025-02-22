import "./styles.css";
import Estudiante from "./components/compEstudiante/estudiantes";
import { useState } from "react";
import FormularioEstudiante from "./components/FormularioEstudiante/formularioEstudiante";

const AppEstudiante = () => {
  const estudiantes = [
    {
      name: "Samantha",
      lastName: "Urdaneta",
      age: 11,
    },
    {
      name: "Izan",
      lastName: "Urdaneta",
      age: 1,
    },
  ];

  const [listaEstudiantes, setlistaEstudiantes] = useState(estudiantes);
  const [mensaje, setmensaje] = useState("");

  const agregarEstudiante = (name, lastName, age) => {
    const nuevoEstudiante = {
      name,
      lastName,
      age,
    };
    setlistaEstudiantes([...listaEstudiantes, nuevoEstudiante]);
  };

  const agregarMensaje = () => {
    setmensaje("Bienvenidos esto es el uso de State en React");
  };

  return (
    <div className="App">
      <h1>Formulario Super Heroes</h1>
      {listaEstudiantes.map((estudiante, index) => {
        return (
          <Estudiante
            nombre={estudiante.name}
            apellido={estudiante.lastName}
            edad={estudiante.age}
          />
        );
      })}
      {/* <button onClick={() => agregarEstudiante("Eliecer", "Portillo", 77)}>
        Agregar Estudiante
      </button> */}
      <p>{mensaje}</p>
      <button onClick={agregarMensaje}>Agregar Mensaje</button>
      <FormularioEstudiante agregarEstudiante={agregarEstudiante} />
    </div>
  );
};

export default AppEstudiante;
