// Write a recursive function called recursiveRange which takes in a number and adds up all the numbers from 0 to the number passed to the function.

function recursiveRange(num) {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
}
