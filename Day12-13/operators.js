// Types
/**
 * Arithmetic Operators (+, -, *, "/", %)
 * Assignment Operators (=, +=, -=, *=, /=)
 * Comparison Operators (Relational) (==, ===, !=, !==, >, <, >=, <= )
 * Logical Operator (&&, ||, !)
 * Ternary Operator ( Control Flow ) (condition(true)? this is for true : this is for false)
 */

// ArithMetic
const a = 10;
const b = 20;
const c = "30";
const d = "forty";

// When adding if both are number it will add, if any one is string it will concat
console.log(a + b);
console.log(a + c);
console.log("Karkuvel " + "Pandi");

console.log(a - b);
console.log(a - c);

// Multiplication
console.log(a * b);
console.log(a * c);
console.log(a * d);
console.log(isNaN("sd"));

//Division
console.log(a / b);
console.log(a / c);

//Modulus
console.log(4 % 2);

// ***********************
// Assignment Operators
let p = 10;
console.log(p);
p += 1; // p = p + 1
console.log(p);
//TODO: Try for all other in the assignment operators

// *****************************
// Comparison Operator (it will return only boolean true or false)

const one = 10;
const two = "10";
console.log(one == two); // It will check only value not the datatype
console.log(one === two); // It will check both value and datatype (strictly)

console.log(one != two);
console.log(one !== two); //(strictly)

console.log(10 > 5);
console.log(10 < 5);

console.log(10 >= 40);
console.log(6 <= 5);

// throw new Error("Something went wrong");
// ********************************
// Logical Operator Its also return only boolean (true / false)

console.log(true && true); //Output : true
console.log(true && false); //Output : false
console.log(false && false); //Output : false
console.log(10 >= 5 && 10 > 5); // Output : true
console.log(10 >= 5 && 10 > 50); // Output : false

console.log(true || false); //Output : true
console.log(false || false); //Output : false

const boolean = false;
console.log(!boolean);

// in operator

// const array = ["pandi", 1, 2, 3];
// console.log(1 in array);
