//  +++++++++++++++++++++  Swithch in JS  +++++++++++++++++++++++

// swithches do the same work as if-else but are more easy to use in some cases

let holiday = "Monday";

switch (holiday) {
    case "Sunday":
        console.log("Its, sunday today and you are on holiday");
        break;
    case "Monday":
        console.log("Its, Monday today and you have to go to office");
        break;
    case "Teusday":
        console.log("Its, Teusday today and you have to do Exercise");
        break;
    case "Friday":
        console.log("Its, Friday today and you have to Clean your office");
        break;

    default:
        console.log("You are not free");
        break;
}


// swichtes are not used commonly but they might be used in Redux.js etc