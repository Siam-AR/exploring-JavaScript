const prompt = require("prompt-sync")(); 

let fruit = "Apple";
switch (fruit) {
  case "Banana":
    console.log("Banana is good!");
    break;
  case "Apple":
    console.log("Apple is tasty!");
    break;
  default:
    console.log("Unknown fruit!");
}

for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i); // Output: 1, 2
}


for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2) break;          // break in nested loops (only inner loop breaks)
    console.log(`i = ${i}, j = ${j}`);
  }
}


outerloop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 3) {
      break outerloop;          //break with label (outer loop breaks)
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}


// let sum = 0;
// while (true) {
//   let num = Number(prompt("Enter a number: "));
//   if (num < 0) break;
//   sum += num;
// }
// console.log(`Sum: ${sum}`);
