const prompt = require("prompt-sync")();

const input = prompt("Enter your marks (0 - 100): ");
const marks = Number(input);

if (isNaN(marks)) {
  console.log("Invalid input! Please enter a numeric value.");
} else if (marks < 0 || marks > 100) {
  console.log("Marks must be between 0 and 100.");
} else if (marks <= 49) {
  console.log("Grade: F (Fail)");
} else if (marks <= 59) {
  console.log("Grade: D");
} else if (marks <= 69) {
  console.log("Grade: C");
} else if (marks <= 79) {
  console.log("Grade: B");
} else if (marks <= 89) {
  console.log("Grade: A");
} else {
  console.log("Grade: A+");
}



const year = Number(prompt("Enter a year: "));

if (isNaN(year)) {
  console.log("Invalid input!");
} else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a Leap Year`);
} else {
  console.log(`${year} is NOT a Leap Year`);
}



const cardInserted = true;  
const correctPIN = "1234";
let accountBalance = 5000;

if (cardInserted) {
  const pin = prompt("Enter your PIN: ");
  if (pin === correctPIN) {
    const amount = Number(prompt("Enter withdrawal amount: "));
    if (isNaN(amount) || amount <= 0) {
      console.log("Invalid amount!");
    } else if (amount <= accountBalance) {
      accountBalance -= amount;
      console.log(`Withdrawal successful. Remaining balance: ${accountBalance}`);
    } else {
      console.log("Insufficient balance.");
    }
  } else {
    console.log("Incorrect PIN.");
  }
} else {
  console.log("Please insert your card.");
}
