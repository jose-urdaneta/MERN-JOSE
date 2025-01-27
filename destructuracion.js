const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle No Vuelvas",
    numero: 123,
    ciudad: "Charlottetown",
  },
  hobbies: ["videoJuegos", "Model Kit", "Musica"],
};

const alterego = {
  nombre: "Diana",
  apellido: "Prince",
  email: "diana.prince@themyscira.com",
  contraseña: "Am@z0nW@rri0r",
  usuario: "wonderwoman",
  direcciones: [
    {
      direccion: "Themyscira Palace",
      ciudad: "Themyscira",
      codigoPostal: "0001",
    },
    {
      direccion: "7000 Hollywood Blvd",
      ciudad: "Los Angeles",
      codigoPostal: "90028",
    },
  ],
  creadoEn: 1714866113353,
};

// Destructuracion Simple

const { nombre, edad, apellido = "Desconocido" } = persona;
console.log(nombre, edad, apellido);

// Destructuracion Anidada
const {
  direccion: { ciudad },
} = persona;
console.log(ciudad);

// Destructuracion en Arreglos

const [hobby1, hobby2] = persona.hobbies;
console.log(hobby1, hobby2);

//Otro ejemplo de Destructuracion

const { direcciones } = alterego;
const [primeraDireccion, segundaDireccion] = direcciones;

console.log("Primera Dirección:", primeraDireccion);
console.log("Segunda Dirección:", segundaDireccion);
