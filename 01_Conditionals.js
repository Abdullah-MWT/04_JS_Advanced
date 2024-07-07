// +++++++++++++++++++++  Conditionals  +++++++++++++++++++++++

// Conditionals are used to perform different actions based on different conditions.

// if-else

let score = 80;

if (score >= 80) {
  console.log("You have cracked the interview, and selected for our company");
} else {
  console.log("You are not selected for our company");
}
// In above exammple we have two conditions, if marks are equal to or greater than 80, then print "you have cracked ..." otherwise print "you are not selected ..."

// Project-use of if-else

let userName = "Abdullah";
let password = 12345678;

if (
  typeof userName === "string" &&
  typeof password === "number" &&
  password.toString().length >= 8 
  ) {
  console.log("You are successfully logedIn");
} else {
  console.log("Incorrect Username or password");
}
