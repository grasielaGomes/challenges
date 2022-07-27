// Write a recursive function called `isPalindrome` which takes a string and returns a boolean, true if the string is a palindrome (the string is the same forward and backward) and false if it is not.

function isPalindrome(str) {
  let result = [];
  let array = str.split("");
  function helper(arr) {
    if (arr.length === 0) return;
    result.push(arr.pop());
    return helper(arr);
  }
  helper(array);

  return result.join("") === str;
}
