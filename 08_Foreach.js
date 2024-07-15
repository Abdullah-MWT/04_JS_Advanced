// +++++++++++++++++  For Each loop in JS  ++++++++++++++++++++++++

const myArr = ["JS", "Python", "C++", "Java", "Swift"];

myArr.forEach( 
    function (value) {
        console.log(value);
    }
);

//  Easy and alternative way to above loop

const myArr2 = ["Apple", "Orange", "Banana", "Carrot", "Grapes"];

function myFunction(item) {
    console.log(item);
}

myArr2.forEach(myFunction);



// Using for-each loop on Objects inside Arrays

const myArr3 = [
    {
        Name: "Abdullah",
        Class: "9th"
    },
    {
        Name: "Zaryab",
        Class: "7th"
    },
    {
        Name: "Sufyan",
        Class: "8th"
    }
]

myArr3.forEach( (item) => {
   console.log(item.Name); 
} )