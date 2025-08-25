// for..of doesn't work for itereting object 
const arr = [1,2,3,4,5];

for(const num of arr){
    console.log(num);
}

const greeting = "Hi, What's Up?";
for (const char of greeting ){
    console.log(`Each char of greeting : ${char}`);
    
}

// Map is a object in js ,,, myMap store unique keys

let myMap = new Map();
myMap.set("BD","Bangladesh");
myMap.set("IN","INDIA")
myMap.set("IN","INDIA") // not accepted 
myMap.set("in","INDIA") // key is unique , accepted . Value doesn't 

console.log(myMap);

for(const key of myMap){
    console.log(key);
    
}

// -- De-structring ---//

for (const [key,value] of myMap){
    console.log(key,' :- ',value)
}


const myObj = {
    name : "Siam",
    email : "siam@gmail.com"
}

for (const [key,value] of myObj){
    console.log(key,' :- ',value)    // will get error because object is not iterable 
                                    //  to iterate object use for...in loop
}

