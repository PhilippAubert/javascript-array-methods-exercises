const grades = [1, 2, 3, 4, 5, 6];

const filteredNumbersLowerThan3 = grades.filter((grade) => {
  return grade < 3;
});

const filteredNumbersHigherEqualThan3 = grades.filter((grade) => {
  return grade >= 3;
});

console.log(filteredNumbersLowerThan3);
console.log(filteredNumbersHigherEqualThan3);
