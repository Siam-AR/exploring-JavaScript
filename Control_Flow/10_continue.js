
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) continue; // Skips Even Numbers
  console.log(i); // Output: 1, 3, 5
}


for (let i = 1; i <= 10; ++i) {
  if (i > 4 && i < 9) continue;
  console.log(i); // Output: 1-4, 9, 10
}


let num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    num++;
    continue;
  }
  console.log(num); // Output: 1, 3, 5, 7, 9
  num++;
}


for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue;         // skips j === 2 only in inner loop
    console.log(`i = ${i}, j = ${j}`);
    
  }
}


outerloop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue outerloop;  // (skips whole current outer loop iteration when j === 2)
    console.log(`i = ${i}, j = ${j}`);
    
  }
}
