const array = ["pandi", "Balu", "Mohamad", "Bharath"];

for (name of array) {
  console.log(name);
}

// For each : Iterate the array and execute the logic. it will not return anything

array.forEach((name) => {
  console.log(name);
});

// Map : Iterate the array and execute the logic and it will also return values in an array format.

const result = array.map((name) => {
  return `Hello ${name}`;
});

console.log(result);

// Filter : filter the array elements and return based on the requirement

const filteredData = array.filter((name) => {
  return name !== "pandi";
});
console.log(filteredData);
