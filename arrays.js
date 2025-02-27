let cursos = [
  {
    nombre: "Desarrollo Web Fullstack",
    duracion: "6 meses",
    instructores: [
      { nombre: "Carlos", especialidad: "Frontend", experiencia: 5 },
    ],
    estudiantes: [
      { nombre: "Luis", edad: 22, notas: [8, 9, 7] },
      { nombre: "Marta", edad: 25, notas: [9, 9, 10] },
    ],
    temario: {
      frontend: ["HTML", "CSS", "JavaScript", "React"],
      backend: ["Node.js", "Express", "MongoDB"],
    },
    horario: {
      lunes: "9am - 6pm",
      martes: "9am - 6pm",
      miercoles: "9am - 6pm",
      jueves: "9am - 6pm",
      viernes: "9am - 6pm",
    },
  },

  {
    nombre: "Desarrollo Mobile",
    duracion: "7 meses",
    instructores: [
      { nombre: "Michael", especialidad: "mobile", experiencia: 10 },
    ],
    estudiantes: [
      { nombre: "Luis", edad: 22, notas: [8, 9, 7] },
      { nombre: "Marta", edad: 25, notas: [9, 9, 10] },
    ],
    temario: {
      database: ["sqllite"],
      ui: ["flutter", "Kotlin", "Swift"],
    },
    horario: {
      lunes: "11am - 8pm",
      martes: "11am - 8pm",
      miercoles: "11am - 8pm",
      jueves: "11am - 8pm",
      viernes: "11am - 8pm",
    },
  },
];

//cursos.forEach((cur, index ) => {
// console.log(cur.horario.martes)
//})

// var courses = cursos.map( (cur, index) => {
//   var newCourse = cur.nombre + "-" + cur.duracion;
//   return newCourse;
// })
// console.log(courses);

var courses = cursos.map(
  (cur, index) => cur.nombre + "-" + cur.horario.viernes
);
console.log(courses);
