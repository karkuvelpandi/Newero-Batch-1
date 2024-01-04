// Javascript function is a block of code to perform particular activity

// Syntax :
/**
 * function funcName(argument){
 *
 * }
 * funcName(parameter)
 */

// console.log("Global console");
function wish(name = "Buddy") {
  console.log(`Good Morning! ${name}`);
  //   console.log("Function console");
}

wish("Pandi");
wish("Bharat");
wish("Bala");

// Example 2

function calculate(a, b) {
  console.log(a + b);
}
calculate(5, 6);
calculate(15555, 568654);

// Inbuilt functions in javascript

const input = prompt("Please enter something!");

const input2 = confirm("select something");

alert("Error occurred");

// String literal  `textString ${}`

// const name = "Karkuvel";

// console.log(`Good morning ${name} !`);
