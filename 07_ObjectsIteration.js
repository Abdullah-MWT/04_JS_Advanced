// ++++++++++++++++ Objects Iteration ++++++++++++++++++

// Using fro-in loop for Objects

const favFruits = {
    app:'Apple',
    Orn: 'Orange',
    Bana: 'Banana',
    Piapp: 'Pine Apple'
}

for (const key in favFruits) {
    console.log(`${key} is shortcut for ${favFruits[key]}`);
}


// Using fro-in loop for Arrays

const myArr = ["BMW", "Volvo", "Ferarri", "Honda Civic", "Mercedes"];
for (const key in myArr) {
    console.log(`${key} and ${myArr[key]}`);
}                       // printing just key will give us keys of Array, as Arrays have always keys in digits form