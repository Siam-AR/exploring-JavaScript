for (let i = 1 ; i <= 3; i++){
    console.log(`Sinle Loop i = ${i}`);
}

console.log("\n\n\n");


for (let i = 1 ; i <= 3; i++){
    console.log(`Outer Loop i = ${i}`);

    for(let j = 1; j <= 3; j++){
        console.log(`Outer Loop i = ${i} , Inner Loop j = ${j}`);
    }
}

console.log("\n\n\n");

for (let i = 1 ; i <= 3; i++){
    console.log(`Outer Loop i = ${i}`);

    for(let j = 1; j <= 3; j++){
        console.log(`Outer Loop i = ${i} , Middle Loop j = ${j}`);
        
        for (let k = 1; k <=3 ; k++){
            console.log(`Outer Loop i = ${i} , Middle Loop j = ${j}, Inner Loop k = ${k}`);
            
        }
    }
}


function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

printDiamond(5);



function printDiamond(n) {

    for (let i = 1; i <= n; i++) {
        let space = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(space + stars);
    }

    for (let i = n - 1; i >= 1; i--) {
        let space = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(space + stars);
    }
}

printDiamond(5);
