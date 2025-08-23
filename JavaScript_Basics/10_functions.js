// ---------------- IIFE (Immediately Invoked Function Expression) ---------------- //
// Useful for code encapsulation and avoiding global scope pollution

(function programStart() {
    console.log("Program Started ...");
})();

(function programRunning(status) {
    console.log(`Program ${status}`);
})("Running");



function myFun() {
    console.log("This is a function");
}

myFun();



function addition(x, y) {
    if (x === undefined || y === undefined) {
        console.log("No Input Found...");
        return;
    }
    return x + y;
}

let a = 5;
let b = 10;
let sum = addition(a, b);
console.log(`Sum: ${sum}`); 

console.log(addition()); // No Input Found... -> undefined


// ---------------- Rest Parameters Example ---------------- //


function collectArguments(...args) {
    return args;
}

let sumArr = collectArguments(1, 2, 3, 4);
console.log(sumArr); // Output: [1, 2, 3, 4]

let sumV2 = 0;
for (let i = 0; i < sumArr.length; i++) {
    sumV2 += sumArr[i];
}
console.log(`Sum V2 : ${sumV2}`);  


function calculateSum(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(`Addition V3 : ${calculateSum(1, 2, 3, 4, 5)}`);


// ---------------- Pass Object to Function ---------------- //

const usersInfo = {
    name: "User 01",
    email: "someone@gmail.com"
};

function handleObjects(object) {
    console.log(`First Data is: ${object.name}`);
    console.log(`Second Data is: ${object.email}`);
}

handleObjects(usersInfo);


// ---------------- Pass Array to Function ---------------- //

const someValues = [1, 2, 3, 4, 5];

function sumOfSomeValues(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}

console.log(`Sum of some values : ${sumOfSomeValues(someValues)}`); 


// ---------------- Function Expression (Anonymous Function) ---------------- //

const greet = function () {
    console.log("Hello from anonymous function!");
};

greet();

// ---------------- Arrow Function (Modern JS syntax) ---------------- //

const multiply = (a, b) => a * b;

console.log(`Multiply: ${multiply(4, 5)}`);


const calculateArea = (length, width) => {
    const area = length * width;
    return area;                    // Required return because of {}
};

console.log(`Area: ${calculateArea(5, 10)}`); 


// ---------------- Callback Function ---------------- //

function doSomething(callback) {
    console.log("Doing something...");
    callback();
}

doSomething(() => {
    console.log("Callback executed!");
});

// ---------------- Default Parameters ---------------- //

function greetUser(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

greetUser();           // Welcome, Guest!
greetUser("Siam");     // Welcome, Siam!
