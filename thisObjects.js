const personajeOriginal = {
  nombre: "Juan",
  presentarse: function () {
    console.log(this.nombre);
  },
};

const nuevoPersonaje = { ...personajeOriginal, nombre: "José" };

console.log(personajeOriginal);

// Registramos las propiedades del nuevo personaje
console.log(nuevoPersonaje);

// Ejecutamos el método heredado en el nuevoPersonaje
nuevoPersonaje.presentarse(); // Imprime "José"
