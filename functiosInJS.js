// function sum(a, b) {
//   console.log(a + b);
// }

// sum(2, 1);

// function sum(a, b) {
//   return a + b;
// }

// const sumValue = sum(2, 5);

//se faltar algum valor pode colocar um valor padrão para o b no caso 0
// function sum(a, b = 0) {
//   return a + b;
// }

// const sumValue = sum(2);

// console.log(sumValue);

// const sumArrow = (a, b = 0) => {
//   console.log(a, b);
//   return a + b;
// };

// const sumValue = sumArrow(2, 3);

// console.log(sumValue);

//outras formas semelhantes que ja retornam o valor
const sumArrow = (a, b = 0) => a + b;

const sumValue = sumArrow(2, 3);

console.log(sumValue);
