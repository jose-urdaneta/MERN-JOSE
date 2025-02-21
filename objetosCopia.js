const personaje = {
  nombre: "Juan",
  presentarse: function () {
    console.log(personaje.nombre); // Referencia directa al objeto original
  },
};

// Crear una copia de personaje, pero cambiar el nombre a "José"
const nuevoPersonaje = { ...personaje, nombre: "José" };

// Registra las propiedades del nuevo personaje
console.log(nuevoPersonaje);

// Ejecuta el método heredado en el nuevoPersonaje
nuevoPersonaje.presentarse();
//Cuando ejecutas este bloque de código, verás que:

console.log(nuevoPersonaje); // Muestra { nombre: 'José', presentarse: [Function: presentarse] }
nuevoPersonaje.presentarse(); // Todavía imprime "Juan"
