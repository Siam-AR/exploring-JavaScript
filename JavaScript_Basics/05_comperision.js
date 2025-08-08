// Null and Comparisons

console.log(null > 0);     // false
console.log(null < 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // true -> because null is converted to 0
console.log(null <= 0);    // true -> because null is converted to 0

let nulll = Number(null);
console.log(nulll);        // 0

let nulll2 = String(null);
console.log(nulll2);       // "null" (string)

// Undefined and Comparisons

console.log(undefined > 0);   // false
console.log(undefined < 0);   // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false
console.log(undefined <= 0);  // false


// Loose vs Strict Equality

console.log("2" == 2);     // true -> loose equality (type coercion)
console.log("2" === 2);    // false -> strict equality (type check)


// null vs undefined

console.log(null == undefined);   // true
console.log(null === undefined);  // false


// NaN Behavior

console.log(NaN == NaN);        // false -> NaN is not equal to itself
console.log(Number("abc"));     // NaN -> invalid number string
console.log(isNaN("abc"));      // true -> checks if it becomes NaN


// Symbol Example

const mySymbol1 = Symbol(123);         
const mySymbol2 = Symbol(123);
console.log(mySymbol1 == mySymbol2);   // false
console.log(mySymbol1 === mySymbol2);  // false -> unique always
