// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  let result = [];
  const arr = str.split("");
  function helper(array) {
    if (array.length === 0) return;
    result.push(array.pop());
    return helper(arr);
  }
  helper(arr);
  return result.join("");
}

function reverse2(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
