// Given a list of strings ops, where ops[i] is the ith operation, apply to the record and is one of the following:
// An integer x - Record a new score of x.
// + - Record a new score of the sum of the current score and the previous score.
// D - Record a new score is double the previous score.
// C - Invalidate the previous score, removing it from the record.
// Return the sum of all scores on the record.
function calPoints(arr) {
  const newRecords = [];
  for (let value of arr) {
    switch (value) {
      case 'C':
        newRecords.pop();
        break;
      case 'D':
        newRecords.push(newRecords[newRecords.length - 1] * 2);
        break;
      case '+':
        newRecords.push(newRecords[newRecords.length - 1] + newRecords[newRecords.length - 2]);
        break;
      default:
        newRecords.push(parseInt(value));
  }
}
  return newRecords.reduce((a, b) => a + b);
}

const ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
const ops2 = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops));
console.log(calPoints(ops2));
