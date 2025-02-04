//Arrays

// let arr = [1, 2, 3, 4];// Array of numbers
// console.log(arr);
// console.log(arr[1]);

// let fruits = ["Apple", "Banana", "Mango"];// Array of Strings
// console.log(fruits);

// let mixedArr = [1, "Apple", true, [2, 3], {name: "John"}]; // Mixed array
// console.log( mixedArr);

// let arr1 = new Array(0, 1, 2, 3, 4, 5); // Defining new Array
// console.log(arr1);

// Array methods

// arr1.push(6); // adding 6 elements to the array
// arr1.push(7); // adding 7 elements to the array
// arr1.pop(); // removing last elementv from the array

// arr1.unshift(6); // added the element at the start of the array
// arr1.shift();

// console.log(arr1.includes(9));
// console.log(arr1.indexOf(3));

// const newArray = arr1.join(); // Changed the array to string

// console.log(newArray);
// console.log(arr1);

// slice & Splice methods in arrays

// console.log("A ", arr1);

// const sliceArray = arr1.slice(1, 4); // slice method doesn't manipulate the original array
// console.log("Sliced array: ", sliceArray);

// console.log("B ", arr1);

// const spliceArray = arr1.splice(1, 4); // spliced method manipulate the original array
// console.log("Spliced array: ", spliceArray);


// const marvel_heroes = ["Ironman", "Thor", "Spiderman"];
// const dc_heroes = ["Antman", "Superman", "Batman"];

// console.log("Marvel heroes: ", marvel_heroes);
// console.log("DC heroes: ", dc_heroes);

// console.log(marvel_heroes.push(dc_heroes));
// console.log("Marvel heroes after pushing DC heroes: ", marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes); // Combine two arrays
// console.log("All heroes: ", all_heroes);

// const all_heroes = [...marvel_heroes, ...dc_heroes]; //spread operator
//  console.log("All heroes: ", all_heroes);

// array within array nested array

// const nestArray = [1, 2, 3, [4, 7, 6, 7], [5,7,3],9, 10, [11]]; // array nested array

// console.log(nestArray.flat(Infinity)); // flattening array using flat() method

console.log(Array.isArray("Karan"));
console.log(Array.from("Karan"));

console.log(Array.from({name: "Karan"})); //ibtresting array using

const score1 = 101;
const score2 = 102;
const score3 = 103;

console.log(Array.of(score1, score2, score3)); // variable to array

