// Array de nombres
let nombres = ["jose", "Neiyalex", "Samantha", "Izan"];

// Función que devuelve la longitud de cada nombre
let longitudNombre = (nombre) => nombre.length;

// Aplicar la función longitudNombre a cada elemento del array
let longitudes = nombres.map(longitudNombre);

console.log(longitudes); // Resultado: [4, 5, 6, 5, 3]
