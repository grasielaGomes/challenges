interface AdvancedArithmetic {
  divisorSum: (n: number) => number;
}

class Calculator implements AdvancedArithmetic {
  divisorSum = (n: number) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum;
  };
}


function main() {
  const MyCalculator = new Calculator();
  const sum = MyCalculator.divisorSum(20);
  console.log("I implemented: AdvancedArithmetic");
  console.log(sum);
}