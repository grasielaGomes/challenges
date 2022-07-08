//A class constructor that takes an array of integers as a parameter and saves it to the __elements  instance variable.
//A computeDifference method that finds the maximum absolute difference between any 2 numbers in __elements and stores it in the maximumDifference instance variable.

class Difference {
  private __elements: number[];
  private __maximumDifference: number;
  public computeDifference(): number {
    this.__elements.sort((a, b) => a - b);
    this.__maximumDifference =
      this.__elements[this.__elements.length - 1] - this.__elements[0];
    return this.__maximumDifference;
  }
  constructor(elements: number[]) {
    this.__elements = elements;
  }
}

const difference = new Difference([1, 2, 5]);
console.log(difference.computeDifference());