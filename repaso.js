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
  },
];

cursos[1].estudiantes.push({ nombre: "jose", edad: 40, notas: [1, 19, 15] });
console.log(cursos);
