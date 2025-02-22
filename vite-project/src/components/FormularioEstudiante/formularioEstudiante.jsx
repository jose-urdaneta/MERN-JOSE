import { useState } from "react";

const FormularioEstudiante = (props) => {
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [edad, setedad] = useState(0);

  const resetearDatos = () => {
    setnombre = "";
    setapellido = "";
    setedad = 0;
  };

  const agregarEstudiante = (event) => {
    event.preventDefault();
    props.agregarEstudiante(nombre, apellido, edad);
    resetearDatos();
  };

  return (
    <form onSubmit={(event) => agregarEstudiante(event)}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(event) => setnombre(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={apellido}
          onChange={(event) => setapellido(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="edad">Edad:</label>
        <input
          type="number"
          id="edad"
          name="edad"
          value={edad}
          onChange={(event) => setedad(event.target.value)}
        />
      </div>
      <button>Agregar</button>
    </form>
  );
};

export default FormularioEstudiante;
