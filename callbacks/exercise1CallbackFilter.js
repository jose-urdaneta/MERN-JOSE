let palabras = ["Jose", "Neiyalex", "Samantha", "Izan"];

let masDeCuatroPalabras = (palabra) => palabra.length > 4;

let palabrasFiltradas = palabras.filter(masDeCuatroPalabras);

console.log(palabrasFiltradas); // El Resultado sera "Neiyalex", "Samantha",

// otro ejecicio

let frutas = ["manzana", "plátano", "uva", "naranja"];

let contieneLetra = frutas.filter((palabra) => palabra.includes("a"));

console.log(contieneLetra); // Resultado: ["manzana", "plátano", "uva", "naranja"]

// Otro Ejercico

let productos = [
  { nombre: "Manzana", precio: 1500 },
  { nombre: "Plátano", precio: 500 },
  { nombre: "Naranja", precio: 2000 },
];

let productosAsequibles = productos.filter(
  (producto) => producto.precio < 2000
);

console.log(productosAsequibles);

// Resultado: [{ nombre: "Manzana", precio: 1500 }, { nombre: "Plátano", precio: 500 }]
