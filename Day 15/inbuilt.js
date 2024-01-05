// Array supporting methods
const array = ["1", "pandi", "10", "some string"];

console.log(array);
array.push(true);
console.log(array);
array.pop();
console.log(array);
array.unshift(10);
console.log(array);
array.shift();
console.log(array);

const array2 = [true, false, true, {}];

const array3 = array.concat(array2);

console.log(array3);

const joinedString = array.join("");
console.log(joinedString);

// String supporting methods

const string = "Hi hello how are you?";

const splittedString = string.split(" ").reverse().join(" ");
console.log(splittedString);

const slicedString = splittedString.slice(0, 6);
console.log(slicedString.length);

// Objects
const object = {
  name: "Bharat",
  email: "bharath@gmail.com",
};

console.log(object.email.length);
