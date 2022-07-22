/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function multipleOfFive(num) {
  for(let i = num + 1; i < num + 3; i++) {
    if(i % 5 === 0) {
      return i;
    }
  }
}

function gradingStudents(grades) {
  const roundedGrades = [];
  for (let grade of grades) {
    if (grade >= 38 && multipleOfFive(grade)) roundedGrades.push(multipleOfFive(grade))
    else roundedGrades.push(grade);
  }
  return roundedGrades;
}

console.log(gradingStudents([73, 67, 38, 33])); // [75, 67, 40, 33]
