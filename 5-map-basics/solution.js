const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below

const numbersTimesTwo = numbers.map((number) => {
  return number * 2;
});

console.log(numbersTimesTwo);

const numbersDivTwo = numbers.map((number) => {
  return number / 2;
});

console.log(numbersDivTwo);

const numbersTimesItself = numbers.map((number) => {
  return number * number;
});

console.log(numbersTimesItself);
