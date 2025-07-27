// ......... Implicit Type Conversion .................... //
// numeric string used with + gives string type

let result;

result = "3" + 2;
console.log(result, "-", typeof(result)); // 32 - string

result = "3" + true;
console.log(result, "-", typeof(result)); // 3true - string

result = "3" + null;
console.log(result, "-", typeof(result)); // 3null - string


// .......... Explicit Type Conversion .......... //

result = Number("5");
console.log(result, "-", typeof(result)); // 5 - number

result = String(true);
console.log(result, "-", typeof(result)); // true - string

result = Boolean(0);
console.log(result, "-", typeof(result)); // false - boolean


let a = 101
let b = "Hello"
let c = "123abc"
let d = null
let e;                           //undefined 
let f = false
let g = true

let aInNumber = Number(a);     // 101
let bInNumber = Number(b);     // NaN
let cInNumber = Number(c);     // NaN
let dInNumber = Number(d);     // 0
let eInNumber = Number(e);     // NaN
let fInNumber = Number(f);     // 0
let gInNumber = Number(g);     // 1

console.log(typeof(a) + " [a]:" + a +"\n",
            typeof(b) + " [b]:" + b +"\n",
            typeof(c) + " [c]:" + c +"\n",
            typeof(d) + " [d]:" + d +"\n",
            typeof(e) + " [e]:" + e+ "\n",
            typeof(f) + " [f]:" + f+ "\n",
            typeof(g) + " [g]:" + g+ "\n",
        );

console.log("[aInNumber] : " + aInNumber + "\n" +
            "[bInNumber] : " + bInNumber + "\n" +
            "[cInNumber] : " + cInNumber + "\n" +
            "[dInNumber] : " + dInNumber + "\n" +
            "[eInNumber] : " + eInNumber + "\n" +
            "[fInNumber] : " + fInNumber + "\n" +
            "[gInNumber] : " + gInNumber + "\n" 
        );

// Boolean Conversion

console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(0));          // false
console.log(Boolean(1));          // true
console.log(Boolean(""));         // false
console.log(Boolean("false"));    // true -> non-empty string is truthy
console.log(Boolean([]));         // true -> empty array is truthy
console.log(Boolean({}));  


// ************ IMPLICIT TYPE CONVERSION OPERATIONS *************

let value = 10
let negValue = -value
console.log(negValue) // -10

let str1 = "Hi"
let str2 = " Hello"
let str3 = str1 + str2
console.log(str3); // Hi Hello

console.log("1" + 2)          // 12
console.log(1 + "2")          // 12
console.log("1" + 2 + 2)      // 122
console.log(1 + 2 + "2")      // 32

// Implicit numeric operations
console.log("5" - 2);         // 3
console.log("5" * "2");       // 10
console.log("5" / 2);         // 2.5
console.log("5" - "abc");     // NaN

// NaN and parse functions
console.log(Number("abc"));        // NaN
console.log(isNaN("abc"));         // true
console.log(parseInt("123abc"));   // 123
console.log(parseFloat("123.45xyz")); // 123.45

// Boolean edge cases
console.log(Boolean("false"));  // true   -- values are in string
console.log(Boolean("0"));      // true                    
console.log(Boolean(""));       // empty string in Boolean is false

