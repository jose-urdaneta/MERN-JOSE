// Problema X: ¿Cuál crees que es la salida de este código?

    // La salida es: eje, mp, lo

// ¿La salida del código fue la misma que creíste en un principio?

// Si

// ¿Por qué se produjo la diferencia?

const variableEjemplo = "ejemplo";

const arregloEjemplo = ["eje", "mp", "lo"];

console.log(arregloEjemplo);

// 1. Anota la salida que piensas que va a dar el código

    //eje, mp, lo

// 2. Anota la salida que muestra el código

    // [ 'eje', 'mp', 'lo' ]

// 3. Anota tus comentarios, explicaciones, teorías, etc. en este espacio

   // Basicamente esta imprimiendo el el arreglo

   //  1. Examina la desestructuración en objetos anidados con un enfoque en propiedades que podrían no existir.
   //Respuesta: Salario sera Undefined se debe igualar para que envie un dato 

   const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);

//  2. Evalúa el uso del operador spread para fusionar objetos con propiedades repetidas.

// Respuesta: En este caso se solpan los objetos en comun

const objetoA = { a: 1, b: 2, c: 3 };

const objetoB = { b: 4, c: 5, d: 6 };

const resultado = { ...objetoA, ...objetoB };

console.log(resultado);

// 3. Analiza el alcance de las variables dentro de bloques y funciones.

// Prediccion: No va a imprimir debido a que las variables estan dentro de la funcion/
// Respuesta : Pero si imprime VAR debido a que tiene alcance

function verificar() {

    if (true) {

        const a = 2;

        let b = 3;

        var c = 4;

    }

    console.log(c);

    console.log(a);

    console.log(b);

}

verificar();

// 4. Explora el comportamiento de JavaScript cuando se manipulan propiedades de un objeto inmutable.

// Respuesta El object.freeze, crea y mantiene el objeto no importa se otro lo setea mantiene su valor original 

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });

datos.edad = 30;

console.log(datos.edad);

// 5. Comprende la manipulación de arrays con métodos que no modifican el array original.
// Respuesta: Aprendiendo que el metodo .concat agrega valores a un array

const original = [1, 2, 3];

const nuevo = original.concat(6,"Oso Polar", "Aprendo");

console.log(original);

console.log(nuevo);

//6. ¿Por qué el código produjo esa salida? ¿Cómo obtendrías el valor del tercer índice?

// Hay que declara el tercer objeto del array e imprimirlo 

const frutas = ['manzana', 'naranja', 'pera', 'mango'];

const [primera, segunda, tercero] = frutas;

console.log(primera);

console.log(segunda);

console.log(tercero);


const frutas = ['manzana', 'naranja', 'pera', 'mango'];

const [primera, segunda] = frutas;

console.log(primera);

console.log(segunda);

//  7. Examina el comportamiento del ámbito de `let` en bucles, especialmente en bucles anidados.

// Imprime del 0 y 1 3 Veces

for (let i = 0; i < 3; i++) {

    for (let i = 0; i < 2; i++) {

        console.log(i);

    }

}

//8. Operador Spread en Objetos ¿Por qué el código produjo esa salida? ¿Cómo solucionarías un problema si quisieras evitar sobrescribir la propiedad ‘b’?



const objeto1 = { a: 1, b: 2 };

const objeto2 = { b: 3, c: 4 };

const combinado = { ...objeto1, ...objeto2 };

console.log(combinado);



