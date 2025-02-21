let curso = {
  nombre: "Desarrollo Web Fullstack",
  duracion: "6 meses",
  instructores: [
    { nombre: "Carlos", especialidad: "Frontend", experiencia: 5 },
    { nombre: "Ana", especialidad: "Backend", experiencia: 3 },
  ],
  estudiantes: [
    { nombre: "Luis", edad: 22, notas: [8, 9, 7] },
    { nombre: "Marta", edad: 25, notas: [9, 9, 10] },
  ],
  temario: {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Express", "MongoDB"],
  },
};

curso.instructores.push = {
  nombre: "Jose",
  especialidad: "Backend",
  experiencia: 3,
};
curso.estudiantes[0].edad = 40;
curso.temario.frontend.push("Angular");

curso.estudiantes[1].notas.push(15);

console.log(curso);
