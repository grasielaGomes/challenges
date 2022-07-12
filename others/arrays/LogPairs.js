// Log all pairs of array

// create a for loop that iterates through the array
// log the current value and the next value

function logPairs(array) {
  array.forEach((element) => {
    array.forEach((element2) => {
      console.log(element, element2);
    });
  });
}

logPairs(['a', 'b']);
