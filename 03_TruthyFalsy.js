//  ++++++++++++++++++  Truthy and Falsy values in JS  +++++++++++++++++

let myName = "Abdullah";

if (myName) {
  console.log("You have a nice Name");
} else {
  console.log("User has no name");
}                                  

// output "You have a nice Name", so strange as we hadn,t applied any condition like truth or false . So there are some default truthy and falsy valuesn in Js

//  Falsy Values 
// false,  0,  -0,  "",  Bigint 0n,  null,  Undefined,  NaN


// Truthy Values
// "0",  "false",  " ",  [],  {},  function() {}

// Checking Array, whether it,s empty or not 

let myArray = [];

if (myArray.length === 0) {
   console.log( "You have an empty Array");
} else{
    console.log("Array isn,t empty");
}


// Checking Object, whether it,s empty or not 

let myObject = {};

if (Object.keys(myObject).length === 0) {
    console.log( "You have an empty Object");
} else{
    console.log("Object isn,t empty");
}


// Nullish coaliscing operator (??) : null || undefined

// it,s used when we want to keep second option with in case our first one doesn,t work

let nums = 5 ?? 10; 
let nums1 = null ?? 20;  

console.log(nums);  //  output = 5 , beacuse it always access the first value if it,s wrong then the second
console.log(nums1);  //  output = 20, now here the first value is null so it took the secod one automatically
