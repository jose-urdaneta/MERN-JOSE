const weatherAdvice = (weather) =>
  weather === "Raining"
    ? "Use an Unbrella"
    : weather === "Sunny"
    ? "Use a Hat"
    : "Use a Jacket";

console.log(weatherAdvice("Raining"));
console.log(weatherAdvice("Sunny"));
console.log(weatherAdvice());
