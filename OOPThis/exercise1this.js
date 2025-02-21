class Felicitador {
  constructor(nombre) {
    this.nombre = nombre;
  }
  felicitar() {
    return `¡Felicidades, ${this.nombre}!`;
  }
}
const felicitador = new Felicitador("Betty");
console.log(felicitador.felicitar()); // ¡Felicidades, Betty!
