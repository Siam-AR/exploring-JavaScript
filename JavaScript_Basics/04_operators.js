// 1. Arithmetic Operators
let x = 5;
console.log("Addition:", x + 3);
console.log("Subtraction:", x - 3);
console.log("Multiplication:", x * 3);
console.log("Division:", x / 3);
console.log("Remainder:", x % 3);
console.log("Increment:", ++x);
console.log("Decrement:", --x);
console.log("Exponentiation:", x ** 3);

// 2. Assignment Operators
let a = 7;
console.log("Assignment:", a);
a += 5;
console.log("Addition Assignment:", a);
a -= 5;
console.log("Subtraction Assignment:", a);
a *= 2;
console.log("Multiplication Assignment:", a);
a /= 2;
console.log("Division Assignment:", a);
a %= 2;
console.log("Remainder Assignment:", a);
a **= 2;
console.log("Exponentiation Assignment:", a);

// String concatenation with +=
let text1 = "What a very ";
text1 += "nice day";
console.log("Concatenated String:", text1);

// 3. Comparison Operators
console.log("Equal to:", 2 == 2);
console.log("Not equal to:", 3 != 3);
console.log("Strictly equal to:", 2 === '2');
console.log("Strictly not equal to:", 2 !== '2');
console.log("Greater than:", 3 > 3);
console.log("Less than:", 2 < 3);
console.log("Greater than or equal to:", 3 >= 3);
console.log("Less than or equal to:", 2 <= 2);

// 4. Logical Operators
let y = 3;
console.log("AND (true):", (y < 5) && (y > 0));
console.log("AND (false):", (y < 5) && (y > 6));
console.log("OR (true):", (y > 2) || (y > 5));
console.log("OR (false):", (y > 3) || (y < 0));
console.log("NOT (false):", !(y == 3));
console.log("NOT (true):", !(y < 2));

// 5. Bitwise Operators
console.log("Bitwise AND:", 5 & 3);
console.log("Bitwise OR:", 5 | 3);
console.log("Bitwise XOR:", 5 ^ 3);
console.log("Bitwise NOT:", ~5);
console.log("Left Shift:", 5 << 1);
console.log("Right Shift:", -10 >> 1);
console.log("Zero-fill Right Shift:", -10 >>> 1);

// 6. String Operators
let str1 = "Hel", str2 = "lo";
console.log("String Concatenation:", str1 + str2);

// Miscellaneous (typeof, ternary)
console.log("Typeof x:", typeof x);

let marks = 85;
let grade = (marks >= 80) ? "A+" : "Below A+";
console.log(grade); // Output: A+

// Nullish Coalescing Operator (??)
let userInput;
let defaultValue = "Guest";
let result = userInput ?? defaultValue;
console.log(result); // "Guest"

userInput = "Siam";
result = userInput ?? defaultValue;
console.log(result); // "Siam"