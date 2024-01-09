// Normal way
// const calculate = (a, b, operation) => {
//     if (operation === "sum") {
//       console.log(a + b);
//     }
//     if (operation === "multi") {
//       console.log(a * b);
//     }
//   };

//   calculate(10, 25, "sum");
//   calculate(10, 25, "multi");

// Callback
const sum = (a, b) => {
  console.log(a + b);
};

const multi = (a, b) => {
  console.log(a * b);
};

const calculate = (a, b, callBack) => {
  callBack(a, b);
};

// callback: sending the function as a parameter to another function
calculate(10, 25, sum);
calculate(10, 25, multi);
