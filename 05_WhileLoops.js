//  +++++++++++++++++++  While  &   Do-while  Loops   +++++++++++++++++++++

let oddNums = 1;
while (oddNums <= 20) {
    console.log(`I,m an Odd Number ${oddNums}`);
    oddNums = oddNums + 2;
}


// Accessing an Array through while loop
let newArr  = ["Abu-Bakar", "Umer", "Usman", "Ali"];
let myHeros = 0;
while (myHeros < newArr.length) {
    console.log(`My Hero is ${newArr[myHeros]}`);
    myHeros = myHeros + 1;
}



// Use Do-While loop

let myScore = 80;
do {
  console.log(`My Score is ${myScore}`);
  myScore = myScore + 3  
} while (myScore <= 100);