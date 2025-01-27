// Operador Ternario
var mensaje = "";
var edad = 15;

// if (edad > 18) {
//   mensaje = "Eres mayor de edad";
// } else {
//   mensaje = "Eres menor de edad";
// }
//                          if                      else
// mensaje = edad > 18 ? "Eres mayor de edad" : "Eres menor de edad";

// console.log(mensaje);

var module = "WEB";

var cinturones = [];

// if(module == "WEB"){
//     cinturones = ["Amarillo"];
// }else{
//     cinturones = ["Amarillo", "Rojo", "Negro"];
// }

// cinturones = module == "WEB" ? ["Amarillo"] : ["Amarillo", "Rojo", "Negro"];

// console.log(cinturones);

// Operador Ternario

// Ejercicio 1

// var nota = 10;

// var aprobado = false;

// aprobado = nota > 12 ? true : false;

// console.log(aprobado);

//VAR,
// Permite declarar, redeclarar, Modificar
// LET,
// Permite declarar, Modificar
//  CONST
// Permite declarar

// Destructuracion

// Ejercicio 1

var stacks = ["Reactjs", "Expresjs", "Mongojs", "Nodejs"];

// var stacks_1 = stacks[0];
// var stacks_2 = stacks[1];
// var stacks_3 = stacks[2];
// var stacks_4 = stacks[3];

// var [strack_1, my_Stack2, stack_3, stack_4] = stacks;

// console.lor(stack_1)
// console.lor(stack_2)
// console.lor(stack_3)
// console.lor(stack_4)

// Ejecicio 3

//              0  1   2  3   4   5
// var precios = [10, 20, 30, 5, 40, 45];

// var [, precio_1, , precio_2, , Precio_3] = precios;

// console.log(precio_1 + precio_2 + Precio_3);

// Destrucuturacion Objetos

// var persona = {
//   nombre: "Ricardo",
//   edad: 35,
//   pais: "Venezuela",
//   altura: 180,
// };

// var { nombre, edad, pais, altura } = persona;
// si quiero guardarlo en otra variable
// var { nombre: nombre_persona, edad, pais, altura } = persona;
// en objetos no esxiste orden
// var { edad: myEdad } = persona;
// console.log(nombre_persona);
// console.log(myEdad);
// console.log(pais);
// console.log(altura);

// var persona = {
//   stacks: ["reactjs", "javasript"],
//   experiencia: 10,
//   titulo: "Senior Software Engineer",
// };

// var { stacks, experiencia, titulo } = persona;

// for (let i = 0; i < stacks.length; i++) {
//   console.log(stacks[i]);
// }

// REST

//                0        1        2       3      4       5
var animales = ["Perro", "Gato", "Raton", "Ave", "Sapo", "Pez"];

// var [animal_1, animal_2, ...restAnimals] = animales;
// var [, animal_2, animal_3, ...restAnimals] = animales;

// console.log(animal_2);
// console.log(animal_3);
// console.log(restAnimals);

// REST PARA OBJETOS

var animales = {
  edad: 10,
  raza: "Goldem",
  tipo: "Perro",
};

var { raza: myRaza, ...otrosAtributos } = animales;
console.log(myRaza);
console.log(otrosAtributos);
