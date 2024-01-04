// Iterative statement: Used to do a certain task multiple time/ repeatedly.
/**
 * for loop
 * while loop
 * do while loop
 * for of (Arrays)
 * for in (Objects)
 */

// For loop:Syntax
// for(initialization;condition; increment/decrement){

// }

// i=i+1
// i+=1
// i++

// Task print 1-50

// For loop example

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
//   // logic goes here
// }

// while loop
let j = 50; //Initialization

while (j >= 1) {
  // Condition
  console.log(j);
  j--; //Increment or decrement
}

// Example
let userInput;
let count = 0; //Initialization

// while (userInput !== "success" && count < 3) {
//   // Condition
//   // userInput = prompt("Please enter password!");
//   count++; //Increment or decrement
// }

if (userInput === "success") {
  console.log("Access granted");
} else if (userInput !== "success") {
  console.log("You have only 3 trails");
}

// do while loop
// Example 1
let k = 10;
do {
  console.log("Some activity");
  k++;
} while (k < 20);

// Example 2 do while
let password;
do {
  password = prompt("Enter your password");
} while (password !== "1234");

// For of ( specially for arrays )

const array = ["name1", "name2", "name3"];

for (let element of array) {
  console.log("Good morning " + element);
  // logic
}

// For in (specially for object)

let object = {
  name: "Bharat",
  age: "20+",
  email: "bharat@email.com",
};

for (let key in object) {
  console.log(key);
  // console.log(object.name);
  // console.log(object["name"]);
  console.log(object[key]);
}
