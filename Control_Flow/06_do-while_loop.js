const prompt = require("prompt-sync")();

let i = 3;
do {
    console.log(i); 
    i--;
} while (i > 0);


let x = 0;
do {
    console.log("Runs once even if false: ", x);
} while (x > 1);


// let infinite = 1;
// do {
//     console.log("This will run forever!");
// } while (infinite > 0);


let correctPin = "1234";
let enteredPin;
let attempts = 0;

do {
    enteredPin = prompt("Enter your 4-digit PIN:");
    attempts++;

    if (enteredPin === correctPin) {
        console.log("Access Granted. Welcome!");
        break;
    } else {
        console.log("Incorrect PIN. Try again.");
    }

} while (attempts < 3);

if (enteredPin !== correctPin) {
    console.log("Card blocked due to 3 incorrect attempts.");
}
