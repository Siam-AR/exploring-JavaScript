// ---------------------- Singleton Object ---------------------- //
// A singleton object is created using Object constructor.

const notionUser = new Object(); // Singleton Object
notionUser.id = 101;
notionUser.name = "Siam";
notionUser.email = "siam@gmail.com";
console.log(notionUser);

const notionUser2 = {}; // Non-singleton object

// -------------------- Object Literals ------------------------- //
const jsUser = {
    name: "Siam", 
    age: 22, 
    "email address": "siam00965@gmail.com", // Key with space, must be accessed with bracket notation
    lastLoggedIn: ["Sunday", "Friday"], 
    greeting2: function () {
        console.log(`Hello JS User ${this.name}`);
    }
};


jsUser.greeting = function () {
    console.log(`Hello jsUser : ${this.name}`);
};


console.log(jsUser.greeting2()); 
jsUser.greeting();


console.log(`Age : ${jsUser.age}`);
console.log(`Email : ${jsUser["email address"]}`); // Use square bracket for special keys


// ----------------- Nested Object Example ---------------------- //

const regularNotionUser = {
    email: "someone@gmail.com",
    fullName: {
        firstName: "Some",
        lastName: "One"
    }
};

console.log(`Email: ${regularNotionUser.email}`);
console.log(`Full Name: ${regularNotionUser.fullName.firstName} ${regularNotionUser.fullName.lastName}`);


// ------------------ Combine / Merge Objects ------------------ //

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// Using Object.assign()
const combinedObj1 = Object.assign({}, obj1, obj2, obj3); // {} is the target
console.log(combinedObj1);

// Using spread operator
const combinedObj2 = { ...obj1, ...obj2, ...obj3 };
console.log(combinedObj2);


// ------------------ Array of Objects -------------------------- //

const arrOfObj = [
    { id: "001", email: "someone@gmail.com" },
    { id: "002", email: "noone@gmail.com" }
];

console.log(arrOfObj[0].id, arrOfObj[0].email);
console.log(arrOfObj[1].id, arrOfObj[1].email);


// ------------------ Object Utilities -------------------------- //

const keysOfJsUser = Object.keys(jsUser); // Returns array of keys
const valuesOfJsUser = Object.values(jsUser); // Returns array of values

console.log("Keys:", keysOfJsUser);
console.log("Values:", valuesOfJsUser);

// hasOwnProperty() – check if object has a specific property
console.log(jsUser.hasOwnProperty("email address")); // true
console.log(jsUser.hasOwnProperty("email Address")); // false (case-sensitive)


// ------------------ Object Destructuring ---------------------- //

const course = {
    courseName: "JavaScript in 1 Shot",
    courseFee: "Free",
    courseInstructor: "Hitesh"
};


console.log(course.courseName);
console.log(course.courseFee);
console.log(course.courseInstructor);

// Destructuring way
const { courseName, courseFee, courseInstructor } = course;
console.log(courseName);
console.log(courseFee);
console.log(courseInstructor);

// Destructuring with alias (useful when same names exist)
const course2 = {
    courseName: "JavaScript Advanced",
    courseFee: "Free",
    courseInstructor: "Hitesh Choudhary"
};

const {
    courseName: c2CourseName,
    courseFee: c2CourseFee,
    courseInstructor: c2CourseInstructor
} = course2;

console.log(c2CourseName);
console.log(c2CourseFee);
console.log(c2CourseInstructor);


// ----------------- Optional Chaining ------------------ //

console.log(".....................")
console.log(jsUser?.address?.city); // Safe access, won't throw error if address is undefined
// console.log(jsUser.city.address) // This will throw error