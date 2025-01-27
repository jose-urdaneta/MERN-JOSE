const superheroes = ["Batman", "Superman", "Wonder Woman", "Flash"];

function imprimirHeroes(heroes) {
  let alcanceLocal = "¡Hola desde Ciudad Gótica!";
  console.log(alcanceLocal);

  function funcionInterna() {
    let alcanceProfundo = "¡Hola desde Metrópolis!";
    console.log(alcanceProfundo);
    console.log(superheroes);
  }

  // Si intento ejecutar esta función fuera de imprimirHeroes(), dará error porque solo su alcance está limitado dentro de la función imprimirHeroes()
  funcionInterna(); // Si la ejecuto dentro de imprimirHeroes(), la salida es ¡Hola desde Metrópolis!
}

imprimirHeroes(superheroes); // La salida es ¡Hola desde Ciudad Gótica!
