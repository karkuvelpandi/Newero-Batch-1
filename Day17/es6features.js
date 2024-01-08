// ES6 new features
/**
 *  let and const - ok
 *  Arrow function - ok
 *  Template literal - `hello ${dynamicValues}` - ok
 *  Default parameter in functions - ok
 *  Destructuring (Arrays and objects) -ok
 *  Spread and rest operator- ok
 *  class -ok
 *  module (import and export)
 */

// Normal function - function identifierName(){ }
wish(); //Working due to function hoisting,
function wish(name = "Buddy") {
  console.log(`Hello ${name}`);
}

// Fat arrow function -()=>{}
const add = (a, b) => {
  console.log(a + b);
};
add(55, 65);

// Why fat arrow function
/**
 * Very concise and small syntax
 * specially for anonymous function and callback usage.
 */

// Code runs after certain time for only one time
setTimeout(() => {
  console.log("This is printing after 5 sec");
}, 5000);

// Code runs after certain time interval (again and again based on the interval time)
// setInterval(() => {
//   console.log("Delayed console ");
// }, 1000);

// Destructuring Arrays and objects

// Normal way of accessing element inside array and object
// const array = [12, 23];
// const object = {
//   name: "Balu",
//   age: "20+",
// };

// const arrayElement = array[0];
// const objectElement = object.name;

// console.log(arrayElement, objectElement);

// Destructuring way
const [a, b] = [12, 23];
const { name, age } = {
  name: "Balu",
  age: "20+",
};

console.log(a, name);
