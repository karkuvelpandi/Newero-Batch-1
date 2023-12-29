// Control flow
/**
 * Conditionals flow
 * Iterative flow
 */

/**
 * if
 * if else
 * if elseif
 * switch case
 * ternary
 */
if (true && false) {
  console.log("condition passed");
}
//
if (10 < 5) {
  console.log("If statement passed");
} else {
  console.log("If statement failed");
}
//

if (false) {
  console.log("Passed");
} else if (10 < 5) {
  console.log("Else if Passed");
} else {
  console.log("Default message");
}

//  Nested if
if (true) {
  if (10 < 5) {
    console.log("Is great");
  } else {
    console.log("Default");
  }
}

// Switch case
const userType = "admin";

switch (userType) {
  case "follower":
    console.log("User is follower", { name: "Karkuvel" });
    break;
  case "admin":
    console.log("User is admin", { name: "pandi ", age: 24 });
    break;
  default:
    console.log("Default Case passed");
    break;
}

// Ternary Operator

10 >= 5 && 10 < 5
  ? console.log("condition passed")
  : console.log("Condition failed");
