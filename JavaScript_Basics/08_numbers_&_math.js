const balance = new Number(10000);
console.log(typeof(balance))    //object
console.log(`Balance is ${balance} BDT`);

let balanceLength = balance.toString().length;
console.log(`Length of Balance: ${balanceLength}`); // 5


const balanceWithFixedPrecision = balance.toFixed(2); // returns string
console.log(`Balance with 2 decimals: ${balanceWithFixedPrecision}`); // "10000.00"


const balanceWithPrecision = balance.toPrecision(6);
console.log(`Balance with precision: ${balanceWithPrecision}`); // "10000.0"


const balanceInLocal = balance.toLocaleString('en-BD');
console.log(`Balance (en-BD): ${balanceInLocal}`); // 10,000

const balance4 = 123.8966;
const precisionBalance = balance4.toPrecision(5); 
console.log(`Precision(5): ${precisionBalance}`); // "123.90"


const balance1 = 100;
const balance2 = 200;
const balance3 = 300;

const maxBalance = Math.max(balance1, balance2, balance3);
console.log(`Max Balance: ${maxBalance}`); // 300


const minBalance = Math.min(balance1, balance2, balance3);
console.log(`Min Balance: ${minBalance}`); // 100

// Random Number Generator (Range)
let max = 100;
let min = 50;
let randomValue = Math.floor(Math.random() * (max - min + 1) + min);
console.log(`Random Value between ${min} and ${max}: ${randomValue}`);


const PI = Math.PI;
console.log(`PI Value: ${PI}`);


const num = 12345.6789;

console.log(Number.isInteger(num));        // false
console.log(Number.parseInt(num));         // 12345
console.log(Number.parseFloat(num));       // 12345.6789

let invalidNum = Number("hello");
console.log(Number.isNaN(invalidNum));     // true

console.log(`Max Safe Integer: ${Number.MAX_SAFE_INTEGER}`); // 9007199254740991
console.log(`Min Safe Integer: ${Number.MIN_SAFE_INTEGER}`); // -9007199254740991


console.log(`1 / 0 = ${1 / 0}`);  // Infinity
console.log(`-1 / 0 = ${-1 / 0}`); // -Infinity

console.log(Math.round(4.6));     // 5
console.log(Math.ceil(4.1));      // 5
console.log(Math.floor(4.9));     // 4
console.log(Math.sqrt(16));       // 4
console.log(Math.pow(2, 3));      // 8