const objeto1 = { a: 1, b: 2 };

const objeto2 = { b: 3, c: 4 };

const combinado = { ...objeto1, ...objeto2, b: objeto1.b };

console.log(combinado);
