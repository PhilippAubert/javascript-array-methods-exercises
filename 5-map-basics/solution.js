const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Your code below

const numbersTimes2 = numbers.map((number) => {
  return number * 2;
});

const numbersDivided2 = numbers.map((number) => {
  return number / 2;
});

const numbersSquare = numbers.map((number) => {
  return number * number;
});

console.log(numbersTimes2);
console.log(numbersDivided2);
console.log(numbersSquare);
