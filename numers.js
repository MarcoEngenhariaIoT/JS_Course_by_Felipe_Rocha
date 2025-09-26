const ages = [8, 13, 27, 30, 22, 40];

const sumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0);

console.log(sumOfAges);

// const evenAges = ages.filter(function (age) {
//   return age % 2 === 1;
// });

// console.log(evenAges);

// const numbers = [1, 2, 3, 4, 5];

// const numbersMultByTwo = numbers.map(function (mult) {
//   return mult / 2;
// });

// console.log(numbersMultByTwo);
