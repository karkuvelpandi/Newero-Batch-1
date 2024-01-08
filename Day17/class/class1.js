// class syntax : class Identifier {}

// Definition: class is a template or blueprint to create an object in n number of times.
// Class contain properties and methods
// this - is a keyword refers to the current object

class Person {
  constructor(uName) {
    this.name = uName;
  }
  age = "20+";

  get_user_details = () => {
    console.log(this.name, this.age);
  };
}

const person1 = new Person("Pandi");
const person2 = new Person("Bharath");
// const person2 = new Person({ name: "Bharath", age: "20+" });
// const person3 = new Person({ name: "Bala", age: "20+" });

console.log(person1.name);
console.log(person2.name);

//
class Customer {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  get_balance = () => {
    // Api call with your details - Other realtime apps
    if (this.name === "bala") {
      // tell their balance
      console.log("Rs.100000");
    }
    if (this.name === "pandi") {
      console.log("Rs.2005");
    }
  };
}

const customer1 = new Customer("pandi", "Savings");
const customer2 = new Customer("bala", "Current");

console.log(customer1);
console.log(customer2);
