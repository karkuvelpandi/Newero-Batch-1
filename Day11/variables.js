console.log("Hello world!");

// var is global scoped
{
  var bala = 10; // syntax variable identifier= data/value;
}
console.log(bala);

// let , const are block scoped
let b = 5;
{
  console.log(b);
}
console.log(b);

// Closure: Accessing outside variable from inside any scop
const c = 20;
{
  console.log(c);
}

// Var we can reassign/redeclare and update
var name = "bala";
console.log(name);
var name = "pandi";
console.log(name);
// Update
name = "karkuvel";
console.log(name);

// let we can only update
let age = 20;
// let age = 24;
console.log(age);
// update
age = 26;
console.log(age);

// const we can't reassign or update
const email = "pk@gmail.com";
// const email="abc@gmail.com"
// email = "a@a.com";
console.log(email);

// Empty declaration
var p;
let q;
// const r;
