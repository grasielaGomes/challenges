//Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

//Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

// Constraints
// 1 <= s.length <= 100
// 1 <= k <= 100

//  s is a valid ASCII string without any spaces.

function caesarCipher(s, k) {
  let result = "";
  const value = k > 26 ? k % 26 : k;
  for (let char of s) {
    if (char.match(/[a-z]/i)) {
      let code = char.charCodeAt(0);
      if (code + value > 122) {
        result += String.fromCharCode(code + value - 26);
      } else if (code < 91 && code + value >= 91) {
        result += String.fromCharCode(code + value - 26);
      } else {
        result += String.fromCharCode(code + value);
      }
    } else {
      result += char;
    }
  }
  return result;
}

console.log(
  caesarCipher(
    "DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.",
    45
  )
); // WGYcqh?u5a*5<EPuzl6?O5{3F].1aZ)io1OPj4(!][WS3Z)kbLC.VfNc9]7Zse?OrxC2wBIXP4ZRP*lvM8(oan9pVk]j!7xrthr.
