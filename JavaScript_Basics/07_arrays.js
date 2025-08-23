const arrOfNum = [1, 2, 3, 4, 5];
const arrOfString = ["Hi", "Hello"];
const mixedArr = ["Mic Testing...", 1, 2, 3];

console.log(typeof arrOfNum);    // "object" - Arrays are special objects in JS
console.log(typeof mixedArr);    // "object"
console.log(typeof Array);       // "function" - Array is a built-in constructor function

console.log(arrOfString[0], arrOfString[1]); 

arrOfString.push("What's Up Buddy?");
console.log(arrOfString);  

arrOfString.pop();
console.log(arrOfString); 


arrOfString.unshift("Hey");     // Add element at the beginning
console.log(arrOfString);  


arrOfString.shift();            // Remove element from the beginning
console.log(arrOfString);


let containsHi = arrOfString.includes("Hi");
console.log(containsHi);  // true

let indexOfHello = arrOfString.indexOf("Hello");
console.log(indexOfHello);  // 1


                    // ===== Converting Arrays =====

// Convert array elements to a single string (comma separated by default)
let stringFromArr = arrOfString.join();
console.log(stringFromArr);          // "Hi,Hello"
console.log(typeof stringFromArr);   // "string"


                    // =====   Combining Arrays =====

const arr1 = ["Hi", "Hello"];
const arr2 = ["Hello", "Hi"];
const arr3 = ["What's Up?"];

// Using concat()
const greeting = arr1.concat(arr2, arr3);
console.log("greeting: " ,greeting);
console.log(typeof(greeting))   //object

// Using spread operator (...)
const greeting2 = [...arr1, ...arr2, ...arr3];
console.log(greeting2);


const arrArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
let flatArr = arrArray.flat(Infinity);
console.log(flatArr);  // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


const str1 = "Hello, What's up buddy?";
console.log(Array.isArray(str1));  

// Convert string to array of characters
const str1ToArr = Array.from(str1);
console.log(str1ToArr);

// Create array with Array.of()
const arrOfSomething = Array.of(str1, 1, 2, 3, str1ToArr);
console.log("array of something ", arrOfSomething);
console.log(arrOfSomething[1]);      // 1


                    // ===== Slicing and Splicing Arrays =====
                    
const newArr = ["Hello", "What's Up", "Buddy?"];

// Slice returns a shallow copy of part of array (does NOT modify original)
const slicedArr = newArr.slice(0, 2);
console.log(slicedArr);  
console.log(newArr);      

// Splice removes elements and modifies original array
const splicedArr = newArr.splice(0, 2);
console.log(splicedArr);  // ["Hello", "What's Up"]
console.log(newArr);      // ["Buddy?"]  (modified)

                    
                            // =====  Array of Objects =====

const arrOfObj = [
    { id: "001", email: "someone@gmail.com" },
    { id: "002", email: "noone@gmail.com" }
];

console.log(arrOfObj[0].id, arrOfObj[0].email);  // 001 someone@gmail.com
console.log(arrOfObj[1].id, arrOfObj[1].email);  // 002 noone@gmail.com

