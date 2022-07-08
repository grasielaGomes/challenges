function findHourglass(arr) {
  const middle = arr.length / 2;
  let sum = -100;

  for (let row = 0; row <= middle; row++) {
    for (let column = 0; column <= middle; column++) {
      const temp = [
        ...arr[row].slice(column, column + 3),
        arr[row + 1][column + 1],
        ...arr[row + 2].slice(column, column + 3)
      ].reduce((acc, item) => acc + item, 0);
      if (temp > sum) sum = temp;
    }
  }

  console.log(sum);
}

const array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const array2 = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];

const array3 = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7]
];

findHourglass(array3);
