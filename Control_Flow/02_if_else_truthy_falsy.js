// Truthy means: treated as true in conditions
// Falsy means: treated as false in conditions

/* 
------------------------------------------------------
Examples of Falsy Values(Only 7 values are falsy):
------------------------------------------------------
false
0
-0
BigInt(0) → 0n
""
null
undefined
NaN

---------------------------
Examples of Truthy Values:
---------------------------
"0"           // non-empty string
"false"       // non-empty string
" "           // whitespace is not empty
[]            // empty array is truthy
{}            // empty object is truthy
function(){}  // functions are truthy

---------------------------
Equality Comparison Examples
---------------------------
false == 0       // true
false == ''      // true
0 == ''          // true
*/

let value = "abcdef";
if (value) {
  console.log("Value provided");
}

let emptyString = "";
if (!emptyString) {                        // if(emptyString) will return false , (!false) == true.
  console.log("Empty string detected");
}

let users = [];
if (users) {
  console.log("Array exists (even if empty)");
}

let obj = {};
if (obj) {
  console.log("Object exists (even if empty)");
}

let age = 0;
if (age) {
  console.log("You entered an age");
} else {
  console.log("Age not provided or is zero");
}
