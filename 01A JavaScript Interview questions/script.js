// //Q! Find Duplicate elements in the array

// const arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 4];

// function findDupl(arr) {
//     let duplicate = [];
//     let unique = [...new Set(arr)];
    
//     for (let i = 0; i < unique.length; i++) {
//         if (arr.indexOf(unique[i])!== arr.lastIndexOf(unique[i])) {
//             duplicate.push(unique[i]);
//         }
//     }
// }

// console.log(findDupl(arr)); // Output: [2, 3, 4]


// //Q2 Find Max & Min value in given array in JS

// const arr = [1, 2, 3, 4, 5];

// let max = arr[0];
// let min = arr[0];

// const maxminfunction = (max, min) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return [max, min];
// }

// console.log(maxminfunction(max, min)); // Output: [5, 1]


// Q3 How to find Second largest value , and remove the first largest value from array

// const arr = [1, 2, 3, 4, 5];

// const largestValue = (arr) => {
//     // Find the first largest value
//     let firstLargestValue = Math.max(...arr);

//     // Remove the first largest value from the array
//     const index = arr.indexOf(firstLargestValue);
//     arr.splice(index, 1);

//     // Find the second largest value
//     let secondLargestValue = Math.max(...arr);

//     return secondLargestValue;
// };

// console.log(largestValue(arr)); // Output: 4


// // Q4 Difference between filter and find method in JS
// const empArr = [
//     { name: 'John', age: 30 },
//     { name: 'Jane', age: 25 },
//     { name: 'Mike', age: 35 },
//     { name: 'Emily', age: 28 },
//     { name: 'Sarah', age: 32 }
// ]

// //filter function
// const filterAge = (emp) => {
//     return empArr.filter(emp => emp.age > 30);
// }
// console.log(filterAge());

// //find function
// const findAge = () => {
//     return empArr.find(emp => emp.age > 30);
// };
// console.log(findAge());


// // Q5find a missing number in a given integer array of 1 to 10

// const arrNum = [1,2,3,4,5,6,9,10];
// const updateMissNum = [];

// const findMissing = (arr) => {
//     const minValue = Math.min(...arr);    
//     const maxValue = Math.max(...arr);

//     for (let i = minValue; i < maxValue; i++) {
//         if (!arr.includes(i)) {
//             updateMissNum.push(i);
//         }
//     }
//     return updateMissNum;
// }

// console.log(findMissing(arrNum)); // Output: [7, 8]


//Q6 How to find even or odd numbers in array in javascript

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const findevenOdd = (arr) => {
//     const evenNum = arr.filter(num => num % 2 === 0);
//     const oddNum = arr.filter(num => num % 2!== 0);
//     return { evenNum, oddNum };  // Return object containing both even and odd numbers as properties.
// }

// console.log(findevenOdd(numArr)); // Output: { evenNum: [2, 4, 6, 8, 10], oddNum: [1, 3, 5, 7, 9] }


// //Q7 How to find the sum of all elements in array in Javascript

// const numArr = [1, 2, 3, 4, 5];

// const findsum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];        
//     }
//     return sum;
// }

// console.log(findsum(numArr)); // Output: 15


//Q8 how to find fictorial of a given number in Javascript

// let bum = 5;

// const factorial = (num) => {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }

// console.log(factorial(bum)); // Output: 120


// //Q9 How to find the average of all elements in array in Javascript

// const numArr = [1, 2, 3, 4, 5];

// const findAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];        
//     }
//     return sum / arr.length;
// }
// console.log(findAverage(numArr)); // Output: 3.0

// //Q10 how to find prime number in Javascript
// const isPrime = (num) => {
//     if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
//     for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
//         if (num % i === 0) return false; // If divisible by any number, it's not prime
//     }
//     return true; // Otherwise, it's prime
// };
// console.log(isPrime(7));  // Output: true
// console.log(isPrime(10)); // Output: false

// // Q11 How to find vowels from string in javascript

// const str = "Karan singh";

// const findVowels = (str) => {
//     let vowels = "aeiouAEIOU"; // Define all vowels (both lowercase and uppercase)
//     let vowelArr = []; // Array to store the vowels found in the string

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) { // Check if the current character is a vowel
//             vowelArr.push(str[i]); // If it is, add it to the vowel array
//         }
//     }
//     return vowelArr; // Return the array of vowels after processing the entire string
// };

// console.log(findVowels(str)); // Output: ['a', 'a', 'i'] // Output: ['a', 'e', 'a', 'e', 'I']    

