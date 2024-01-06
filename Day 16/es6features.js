// ES6 new features
/**
 *  let and const - ok
 *  Arrow function - ok
 *  Template literal - `hello ${dynamicValues}` - ok
 *  Default parameter in functions - ok
 *  Destructuring (Arrays and objects)
 *  Spread and rest operator
 *  class
 *  module (import and export)
 */

// Normal function
wish("Pandi");
function wish(name = "Buddy") {
  console.log(`Hello ${name}`);
}

// Fat arrow function
const add = (a, b) => {
  console.log(a + b);
};
add(55, 65);
