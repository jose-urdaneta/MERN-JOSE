const Estudiante = (props) => {
  const { nombre, apellido, edad } = props;

  return (
    <>
      <h2>Nombre:{nombre}</h2>
      <h2>Apellido: {apellido}</h2>
      <p>Edad: {edad}</p>
    </>
  );
};

export default Estudiante;
