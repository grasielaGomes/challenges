// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Time: O(n) || O(n + m)
// Space: O(1)
// Sample input: "hello", "hello world"
// Sample output: true


function isSubsequence(string1, string2){
    let i = 0;
    let j = 0;
    while(i < string1.length && j < string2.length){
        if(string1[i] === string2[j]){
            i++;
        }
        j++;
    }
    return i === string1.length;
}

function isSubsequence2(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// O(n)
function isSubsequence3(str1, str2){
  let pointer1 = str1[0];
  let counter = 1;
  let result = "";

  for(let i = 0; i < str2.length; i++){
    if(str2[i] === pointer1){
      result += pointer1;
      pointer1 = str1[counter];
      counter++;
    }
  }
  return result === str1;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false