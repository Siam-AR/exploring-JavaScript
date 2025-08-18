const name = "Siam";
console.log(name[2]); // Output: a

console.log(name.length); 

console.log(name.toUpperCase()); 
console.log(name.toLowerCase()); 


const email = "     siam@bubt.edu.bd    ";
console.log(email.trim()); 

const sentence = "Hello Bangladesh";
console.log(sentence.indexOf('a')); // Output: 7

// Extracting substring using slice
const str = "Siam Al Rabbi";
console.log(str.slice(0, 4)); // Output: Siam
console.log(str.slice(-6));   // Output: Rabbi

const bio = "I am SIAM";
console.log(bio.replace("SIAM", "Siam Al Rabbi")); // Output: I am Siam Al Rabbi

const data = "I study at BUBT";
console.log(data.includes("BUBT")); 
console.log(data.includes("AIUB")); 

// Splitting string into array
const userInput = "My name is Siam Al Rabbi";
console.log(userInput.split(" ")); 
// Output: [ 'My', 'name', 'is', 'Siam', 'Al', 'Rabbi' ]


const msg = "Siam ";
console.log(msg.repeat(3)); 

// Template literals
const myName = "Siam";
const myUni = "BUBT";
console.log(`My name is ${myName} and I study at ${myUni}`); 


const info = "My ID is 22235103331";
console.log(info.startsWith("ID"));  // Output: false
console.log(info.endsWith("331"));   // Output: true
