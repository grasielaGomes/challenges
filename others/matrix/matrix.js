const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
];

// const matrix = [
//   [1, 2],
//   [3, 4]
// ];

const subMatrixLength = matrix[0].length / 2;
const subArr = [];
let counter = 0;

for (let i = 0; i < subMatrixLength; i++) {
  // Upper left sub matrix
  for (let j = 0; subMatrixLength > j; j++) {
    subArr.push(matrix[i][j]);
  }
  // Upper right sub matrix
  for (let j = matrix.length - 1; j >= subMatrixLength; j--) {
    if (matrix[i][j] > subArr[counter]) {
      subArr[counter] = matrix[i][j];
    }
    counter++;
  }
}

// Lower left sub matrix
counter = 0;
for (let i = matrix.length - 1; i >= subMatrixLength; i--) {
  for (let j = 0; subMatrixLength > j; j++) {
    if (matrix[i][j] > subArr[counter]) {
      subArr[counter] = matrix[i][j];
    }
    counter++;
  }
}

// Lower right sub matrix
counter = 0;
for (let i = matrix.length - 1; i >= subMatrixLength; i--) {
  for (let j = matrix.length - 1; j >= subMatrixLength; j--) {
    if (matrix[i][j] > subArr[counter]) {
      subArr[counter] = matrix[i][j];
    }
    counter++;
  }
}

const sum = subArr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);
