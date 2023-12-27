console.log("Hello world!");

// keyword - typeof
// Primitive
// str a= "jaskfd"
let a = 10;
console.log(typeof a);
let b = "pandi";
console.log(typeof b);
let c = false;
console.log(typeof c);
var d;
console.log(typeof d);
var e = null;
console.log(typeof e);

// Non primitive

// Object: Group of key value pair. where we can't duplicate the key/property
let exampleObject = {
  name: "pandi",
  age: 24,
  email: "pk@gmail.com",
};

//
console.log(exampleObject.name);
console.log(typeof exampleObject);

// Array : Group of value/elements in one entity, where we can use duplicates
let exampleArray = ["a", "b", true, 10, null];

console.log(exampleArray[0]);
console.log(typeof exampleArray);

// Symbol and Bigint
// var f = $;
// var g = "";
