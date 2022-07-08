function Person(initialAge) {
  this.age = function () {
    if (initialAge < 0) {
      console.log("Age is not valid, setting age to 0.");
      return 0;
    } else {
      return initialAge;
    }
  };
  this.checkedAge = this.age();
  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    if (this.checkedAge === 0) {
      return;
    } else if (this.checkedAge < 13) {
      console.log("You are young.");
    } else if (this.checkedAge >= 13 && this.checkedAge < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  this.yearPasses = function () {
    return this.checkedAge += 1;
  }
}

const Grasi = new Person(16);
Grasi.amIOld();
Grasi.yearPasses();
Grasi.yearPasses();
Grasi.yearPasses();
Grasi.amIOld();


class Polygon {
  constructor(arr) {
    this.lengths = arr;
    this.perimeter = () => {
      return this.lengths.reduce((item, acc) => (item += acc), 0);
    };
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());