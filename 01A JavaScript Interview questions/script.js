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




