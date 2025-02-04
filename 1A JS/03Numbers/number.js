const score = 108;
console.log(score);

const num = new Number(7);
console.log(num);
console.log(num.toString().length); // convert number to string
console.log(num.toFixed(2));

const num1 = 101.453465;
console.log(num1.toPrecision(3));

const hundereds = 1000000;
console.log(hundereds.toLocaleString('en-IN')); // toLocaleString() method converts a number to a string, using the locale settings of the user's browser.

// ++++++++++++ Maths +++++++++

console.log(Math);
console.log(Math.PI); // π (approximately 3.14159)
console.log(Math.abs(-10)); // absolute value of a number
console.log(Math.ceil(10.4)); // round up to the nearest integer
console.log(Math.floor(10.4)); // round down to the nearest integer
console.log(Math.round(10.4)); // round to the nearest integer
console.log(Math.round(10.6)); // round to the nearest integer
console.log(Math.min(1,2,3,4,5)); 
console.log(Math.max(1,2,3,4,5)); 

console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // imp factor used in codes
