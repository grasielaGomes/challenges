class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log(
      "Name: " +
        this.lastName +
        ", " +
        this.firstName +
        "\nID: " +
        this.idNumber
    );
  }
}

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, identification, scores) {
    super(firstName, lastName, identification);
    this.scores = scores;
  }
  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    let average = this.scores.reduce((acc, item) => acc + item, 0) / this.scores.length;
    if (average >= 90) return "O";
    if (average >= 80) return "E";
    if (average >= 70) return "A";
    if (average >= 55) return "P";
    if (average >= 40) return "D";
    return "T";
  }
}


const Grasi = new Student("Grasi", "Santos", "123456789", [45, 67, 72, 34, 91]);
Grasi.printPerson();
console.log(Grasi.calculate());