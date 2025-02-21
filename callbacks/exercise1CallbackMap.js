let palabras = ["Papa", "Mama", "Hija", "Hijo"];

// let convertiAMinusculas = (palabras) => palabras.toUpperCase();

// let mapPalabras = (array, fn) => {
//   for (let index = 0; index < array.length; index++) {
//     array[index] = fn(array[index]);
//   }
//   return array;
// };

// Con el MAP

let mapPalabras = palabras.map((palabra) => palabra.toUpperCase());

// console.log(mapPalabras(palabras, convertiAMinusculas));
console.log(mapPalabras);
