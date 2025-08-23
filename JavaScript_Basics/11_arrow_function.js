// ➤ Arrow Function Syntax(Full Syntax)

let myFunction = (arg1, arg2) => {
    // code block
    return arg1 + arg2;
};

// Shorter version
let myShortFunc = (x, y) => x * y;

const addNumbers = (a, b) => a + b;
console.log(addNumbers(5, 3));


let multiplyRegular = function(x, y) {
    return x * y;
};

let multiplyArrow = (x, y) => x * y;

console.log(multiplyRegular(4, 5)); 
console.log(multiplyArrow(4, 5));  



const sayHello = () => "Hello, World!";     // No Argument
console.log(sayHello());

// One Argument (Parentheses optional)
const square = x => x * x;
console.log(square(5)); 

// ➤ Arrow Function and `this` Keyword
function Person1() {
    this.name = 'Jack';
    this.age = 25;

    this.sayAge = function () {
        console.log("Outer:", this.age); // 25

        let innerFunc = () => {
            console.log("Arrow inner:", this.age); // 25
        };

        innerFunc();
    };
}
const person1 = new Person1();
person1.sayAge();

// ➤ Regular Function & this (Not bound)
function Person2() {
    this.name = "Jack";
    this.age = 25;

    this.sayAge = function () {
        console.log("Outer:", this.age); // 25

        function innerFunc() {
            console.log("Inner:", this.age); // undefined
        }

        innerFunc();
    };
}

const person2 = new Person2();
person2.sayAge();

// ➤ Arrow Function as an Expression
let age = 5;
let welcome = (age < 18) ? 
    () => console.log("Child") : 
    () => console.log("Adult");

welcome(); // Output: Child


// ➤  Don’t use arrow function as method in object
let person = {
    name: "Jack",
    age: 25,
    sayAge: () => {
        console.log(this.age); // undefined
    }
};
person.sayAge(); // Output: undefined



// Arrow in setTimeout (keeps `this`)
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log("Seconds passed:", this.seconds);
    }, 1000);
}

const t = new Timer(); // Uncomment to test in browser or Node
