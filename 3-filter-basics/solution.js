const grades = [5, 1, 1.3, 3.7, 1.7, 2.1, 2.4, 4.1, 6];

const filteredNumbersLowerThan3 = grades.filter((grade) => {
  return grade < 3;
});

const filteredNumbersHigherEqualThan3 = grades.filter((grade) => {
  return grade >= 3;
});

console.log(filteredNumbersLowerThan3);
console.log(filteredNumbersHigherEqualThan3);
// Your code below
