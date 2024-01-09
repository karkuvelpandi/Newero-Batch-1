// export from module 1 to module 2

// ES5
const name = "Pandi";
const age = "24";

// Default export
// module.exports=name

// Named export
// module.exports = { name: name, age: age };

// ES6
// Default export
function wish() {
  console.log("Good evening all");
}
// export default wish;

// Named export
export { name, age, wish };
