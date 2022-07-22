// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

//Input: "fun&!! time"
// Output: time

//Input: "I love dogs"
// Output: love

function LongestWord(sen) {
  // code goes here
  sen = sen.replace(/[^a-zA-Z ]/g, '');
  sen = sen.split(' ');
  let longest = 0;
  let longestWord = '';
  for (let i = 0; i < sen.length; i++) {
    if (sen[i].length > longest) {
      longest = sen[i].length;
      longestWord = sen[i];
    }
  }
  return longestWord;
}

console.log(LongestWord("fun&!! time")); // time
console.log(LongestWord("I love dogs")); // love
