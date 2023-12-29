// Symbol and BigInt

const email = Symbol("something");
const age = Symbol("something");

const obj = {
  name: "pandi",
};

// obj.email="pk@gmail.com"
console.log(obj.name);
console.log(obj["name"]);

obj[email] = "pk@gmail.com";

console.log(obj);

// iterate
for (const key in obj) {
  console.log(key);
}

console.log(obj[email]);
console.log(email === age);

// BigInt
// Max value that js can handle 9007199254740991
const maxNumber = 9007199254740991;
console.log(maxNumber + 2);

const newInt = 9007199254740991n;
console.log(newInt + 2n);

console.log(typeof email);
console.log(typeof newInt);
