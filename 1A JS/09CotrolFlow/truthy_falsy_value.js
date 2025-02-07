
// const isEmail = "Karan@delloit.com";
// const isEmail = ""
const isEmail = [] //true

if (isEmail) {
    console.log("Email is valid"); //true
}else {
    console.log("Email is not valid"); //false
}

// Falsy Value

// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(false)); // false

// Truthy Value

// console.log(Boolean(true)); // true
// console.log(Boolean("0")); // true
// console.log(Boolean("false")); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(function () {})); // true


const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // true 
}

// false == 0 // true
// '' == 0 // true
// false == '' // true


// Nullish coalescing Operator (??): null undefined

let a = null;
let b = undefined;

// console.log(a?? b); // Output: undefined

let val1;
val1 = 5 ?? 6
val1 = null ?? 5
val1 = undefined ?? 5


// Ternary Operator

let result = true ? "Yes" : "No";
condition ? true : false;



