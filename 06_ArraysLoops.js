// ++++++++++++++++ Some Other Loops specially used for Arrays +++++++++++++++++++++

// 1:-   for-of  loop

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const value of myArr) {
    console.log(value);
}

//  for-of in case of string

let myFriend = "Zaryab gul"
for (const friend of myFriend) {
    if (friend == " ") {
        continue
    }
    console.log(friend);
}


// Map method in JS

let myMap = new Map();   // basically map is declarted like this.. Here we can directly injects keys,values into map or then either through .set method
 myMap.set('Name', 'Abdullah');
 myMap.set('Class', '12th-A');
 myMap.set('City', 'Lahore');
 myMap.set('Leader', 'Imran Khan');

//  console.log(myMap);    This will return key,values in form of objects, which means Map is an Object

for (const [key, value] of myMap) {   // Destructuring of an Array through Map
    console.log(key, ':-', value);
}



