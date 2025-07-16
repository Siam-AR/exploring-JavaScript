// Primitive Data Types (7 types):
// Number, String, Boolean, Symbol, Null, Undefined, BigInt
// Saved in Stack memory — copied by value

const myNumber = 3;                         // Number
const myString = "Hello, World!";           // String
const myBoolean = true;                     // Boolean
const mySymbol1 = Symbol(123);              // Symbol
const value = null;                         // Null
let value2;                                 // Undefined
let value3 = undefined;                     // Also Undefined
const bigIntValue = 401382743021987431827n; // BigInt


let name1 = "Siam";
let name2 = name1;
console.log(name2); // Siam

name2 = "SiamAR";
console.log(name1); // Siam
console.log(name2); // SiamAR

// Non-Primitive / Reference Data Types:
// Array, Object, Function
// Stored in Heap — copied by reference

const myArray = ["Hello", "World"];   // Array
const myArray2 = [1, 2, 3, 4, 5];

const myObject = {
  name: "Siam",
  age: 22,
  country: "Bangladesh"
};                                      // Object

// Regular function
function test(a) {
  return a + a;
}
console.log(test(5));           // 10
console.log(typeof test);       // function

// Function expression
const testFunction = function (a) {
  return a - a;
};
console.log(testFunction(5));   // 0


console.log(typeof myArray);    // object
console.log(myObject);        
console.log(myObject.age);      // 22

// Reference Copy Example:
let user101 = {
  name: "Siam",
  age: 22
};

let user102 = user101;                  // Same reference
console.log(user101, user102);

// Change one, both reflect
user102.age = 23;
console.log(user101, user102); // both now age: 23


console.log(
  typeof myNumber + " [myNumber]: " + myNumber + "\n" +
  typeof myString + " [myString]: " + myString + "\n" +
  typeof myBoolean + " [myBoolean]: " + myBoolean + "\n" +
  typeof mySymbol1 + " [mySymbol1]: " + mySymbol1.toString() + "\n" +
  typeof value + " [null]: " + value + "\n" +
  typeof value2 + " [undefined]: " + value2 + "\n" +
  typeof bigIntValue + " [bigInt]: " + bigIntValue
);