// Given a number create a function that returns an array of prime numbers.
// A prime number is a number that is only divisible by 1 and itself.
// For example, 2 is a prime number, but 4 is not.
// The prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

function isPrime(num) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(PrimeNumbers(10));

function PrimeNumbers(num) {
  let obj = {};
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      obj[i] = "Prime";
    }
  }
  return obj;
}

function processData(input) {
  const array = input.split("\n").slice(1);
  for (let number of array) {
    if (parseInt(number) === 1) console.log("Not prime");
    else if (parseInt(number) === 2) console.log("Prime");
    else
      isPrime(parseInt(number))
        ? console.log("Prime")
        : console.log("Not prime");
  }
} 

processData("30 1 4 9 16 25 36 49 64 81 100 121 144 169 196 225 256 289 324 361 400 441 484 529 576 625 676 729 784 841 907");

console.log(isPrime(9));