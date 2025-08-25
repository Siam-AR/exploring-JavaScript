const prompt = require("prompt-sync")();

let i = 1;
while (i < 4) {
  console.log(i);
  i ++;
}



let num = 0, sum = 0;
while (num >= 0) {
  sum += num;
  num = Number(prompt("Enter a number: "));
}
console.log(`The sum is ${sum}`);


// // Infinite while loop 

// let x = 1;
// while (x < 5) {
//   console.log(x);

// }


let j = 1;
while (j <= 10) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

let countdown = prompt("Enter a number : ")
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}
console.log("BOOM!");
