const a = 100;                       // Constant variable (cannot be reassigned)
console.log("const a =", a); 

// a = 200; // TypeError: Assignment to constant variable

let aa, b, c;

// Assign different types of values
aa = "This is a string";
b = 101;           
c = 101.11;        

console.log(aa, b, c);
console.table([aa, b, c]);          // Display output as a table

console.log(typeof aa); // string
console.log(typeof b);  // number
console.log(typeof c);  // number


let age = 25;
console.log("Initial age:", age);
age = 30;
console.log("Updated age:", age);


let name = "Siam", score = 95, passed = true;
console.log(name, score, passed);


let notAssigned;
let nothing = null;


console.log("notAssigned:", notAssigned, "| Type:", typeof notAssigned); // undefined
console.log("nothing:", nothing, "| Type:", typeof nothing);             // object (special case)