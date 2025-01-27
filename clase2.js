function divide(numero1, numero2) {
  try {
    return numero1 / numero2;
  } catch (error) {
    console.log("Hubo un error en el metodo Sumar", error);
  }
}

divide(0, 2);
console.log(divide);
