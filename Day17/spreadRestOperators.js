// Spread operator (...)

const array = [1, 2, 3, 4];
const array2 = [8, 9];

const newArray = array.concat(array2);
console.log(newArray);

const resultArray = [...array, 5, 6, 7, ...array2];
console.log(resultArray);

const obj = {
  name: "Bharath",
  age: "20+",
};

const resultObj = { ...obj, email: "bharath@gmail.com" };

console.log(resultObj);

// Rest operator (...)

function totalCost(dressCost, ...amount) {
  let totalAmount = 0;
  for (let amt of amount) {
    // totalAmount = totalAmount + amt;
    totalAmount += amt;
  }

  console.log(totalAmount - dressCost);
}
const dressSpends = 100;
totalCost(dressSpends, 12, 52, 65, 89, 78, 500, 58);

// Function with return keyword

function balance(amt) {
  console.log("Code Before return statement");
  return amt + 500;
  console.log("Code After return statement");
}

const finalBalance = balance(1000);

console.log(finalBalance);

if (true) {
  console.log("Returning inside if block");
  return;
  console.log(" After Returning inside if block");
} else {
  console.log("THis is else block");
}
