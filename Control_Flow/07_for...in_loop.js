 // for...in loop dosen't works on map , for iterate map use for...of loop
const languages = {
    js : "JavaScript",
    cpp : "C++",
    java : "Java"
}

for (const extension in languages){
        console.log(`[${extension}] is the extention for ${languages[extension]}`);
        
}

let myMap = new Map();
myMap.set("BD","Bangladesh");
myMap.set("IN","INDIA")
myMap.set("IN","INDIA")
myMap.set("in","INDIA")

console.log(myMap);

for(const key in myMap){
    console.log(key);       // for...in loop dosen't works on map , for iterate map use for...of loop
    
}
