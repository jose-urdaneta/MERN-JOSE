// Función para contar las visitas
function contarVisitas() {
  let visitas = 1; // Variable local para contar las visitas

  // Función para mostrar el número de visitas
  function mostrarVisitas() {
    console.log(`Número de visitas: ${visitas}`);
  }

  // Función para registrar una nueva visita
  function nuevaVisita() {
    visitas++;
  }

  // Simulación de visitas
  nuevaVisita(); // Se registra una nueva visita
  nuevaVisita(); // Otra visita
  mostrarVisitas(); // Se muestra el número total de visitas
}

// Llamada a la función para contar visitas
contarVisitas();
