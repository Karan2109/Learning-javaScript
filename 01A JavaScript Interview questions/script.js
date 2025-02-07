//Q1 Find Duplicate elements in the array

// const arr = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 9, 4];

function findDupl(arr) {
    let duplicate = [];
    let unique = [...new Set(arr)];
    
    for (let i = 0; i < unique.length; i++) {
        if (arr.indexOf(unique[i])!== arr.lastIndexOf(unique[i])) {
            duplicate.push(unique[i]);
        }
    }
}

// console.log(findDupl(arr)); // Output: [2, 3, 4]


//Q2 Find Max & Min value in given array in JS

// const arr = [1, 2, 3, 4, 5];

// let max = arr[0];
// let min = arr[0];

const maxminfunction = (max, min) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return [max, min];
}

// console.log(maxminfunction(max, min)); // Output: [5, 1]


// Q3 How to find Second largest value , and remove the first largest value from array

const arr = [1, 2, 3, 4, 5];

const largestValue = (arr) => {
    // Find the first largest value
    let firstLargestValue = Math.max(...arr);

    // Remove the first largest value from the array
    const index = arr.indexOf(firstLargestValue);
    arr.splice(index, 1);

    // Find the second largest value
    let secondLargestValue = Math.max(...arr);

    return secondLargestValue;
};

// console.log(largestValue(arr)); // Output: 4


// Q4 Difference between filter and find method in JS
const empArr = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Mike', age: 35 },
    { name: 'Emily', age: 28 },
    { name: 'Sarah', age: 32 }
]

//filter function
const filterAge = (emp) => {
    return empArr.filter(emp => emp.age > 30);
}
// console.log(filterAge());

//find function
const findAge = () => {
    return empArr.find(emp => emp.age > 30);
};
// console.log(findAge());


// Q5find a missing number in a given integer array of 1 to 10

const arrNum = [1,2,3,4,5,6,9,10];
const updateMissNum = [];

const findMissing = (arr) => {
    const minValue = Math.min(...arr);    
    const maxValue = Math.max(...arr);

    for (let i = minValue; i < maxValue; i++) {
        if (!arr.includes(i)) {
            updateMissNum.push(i);
        }
    }
    return updateMissNum;
}

// console.log(findMissing(arrNum)); // Output: [7, 8]


// Q6 How to find even or odd numbers in array in javascript

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findevenOdd = (arr) => {
    const evenNum = arr.filter(num => num % 2 === 0);
    const oddNum = arr.filter(num => num % 2!== 0);
    return { evenNum, oddNum };  // Return object containing both even and odd numbers as properties.
}

// console.log(findevenOdd(numArr)); // Output: { evenNum: [2, 4, 6, 8, 10], oddNum: [1, 3, 5, 7, 9] }


//Q7 How to find the sum of all elements in array in Javascript

// const numArr = [1, 2, 3, 4, 5];

const findsum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];        
    }
    return sum;
}

// console.log(findsum(numArr)); // Output: 15


// Q8 how to find fictorial of a given number in Javascript

let bum = 5;

const factorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// console.log(factorial(bum)); // Output: 120


//Q9 How to find the average of all elements in array in Javascript

const numArr = [1, 2, 3, 4, 5];

const findAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];        
    }
    return sum / arr.length;
}
// console.log(findAverage(numArr)); // Output: 3.0

//Q10 how to find prime number in Javascript
const isPrime = (num) => {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false; // If divisible by any number, it's not prime
    }
    return true; // Otherwise, it's prime
};
// console.log(isPrime(7));  // Output: true
// console.log(isPrime(10)); // Output: false

// Q11 How to find vowels from string in javascript

const str = "Karan singh";

const findVowels = (str) => {
    let vowels = "aeiouAEIOU"; // Define all vowels (both lowercase and uppercase)
    let vowelArr = []; // Array to store the vowels found in the string

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) { // Check if the current character is a vowel
            vowelArr.push(str[i]); // If it is, add it to the vowel array
        }
    }
    return vowelArr; // Return the array of vowels after processing the entire string
};

// console.log(findVowels(str)); // Output: ['a', 'a', 'i'] // Output: ['a', 'e', 'a', 'e', 'I']    

// Q12 How to reverse a string in Javascript

const rStr = "naraK"

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

// console.log(reverseString(rStr)); // Output: "Karan"

// Q13 How to find palindrome in javascript

const pStr = "adam";

const isPalindrome = (str) => {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

// console.log(isPalindrome(pStr)); // Output: true

// Q14 How to swap two variables without using the third

// let num1 = 10;
// let num2 = 20;
// console.log(num1); 10

// [num1, num2] = [num2, num1]; //de-structure of array

// console.log(num1); // Output: 20
// console.log(num2); // Output: 10

// Q15 How to merged two arrays in javascript

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2]; // spread operator

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


// Q16 How to find factor of a given integer in javascript

const findFactor = (num) => {
    let factorArr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factorArr.push(i);
        }
    }
    return factorArr;
}
// console.log(findFactor(10)); // Output: [1, 2, 5, 10]


// Q17 how to simple calculator in javscript

const num1 = 10;
const num2 = 20;
const operator = '+';

const calculate = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operator. Please use one of the following: +, -, *, /");
    }
}

// console.log(calculate(num1, num2, operator)); // Output: 30

// Q18 How to compare two Arrays are Equal or Not in JavaScript

const arra1 = [1,2,3,4];
const arra2 = [1,2,3,4];

const compareArray = (arra1, arra2) => {
    // return JSON.stringify(arra1) === JSON.stringify(arra2);
    return arr1.length === arr2.length && arra1.every(el => arra2.includes(el));
}

// console.log(compareArray(arra1, arra2)); // Output: true

// Q19 How to find intersection of two arrays in javascript

// const arra = [1, 2, 3, 4, 5];
// const arrb = [4, 5, 6, 7, 8];

const findIntersection = (arr1, arr2) => {
    return arr1.filter(num => arr2.includes(num));
}

// console.log(findIntersection(arra, arrb)); // Output: [4, 5]


// Q20 How to find union of two arrays in javascript

const arra = [1, 2, 3, 4, 5];
const arrb = [4, 5, 6, 7, 8];

const findUnion = (arr1, arr2) => {
    return [...new Set([...arr1,...arr2])];
}

// console.log(findUnion(arra, arrb)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// Q21 how to convert celsius to fahrenheit or vice versa

const celsiusToFahrenheit = () => {
    const celsius = parseFloat(prompt("Enter temperature in Celsius:"));
    return (celsius * 9/5) + 32;
}

// console.log(celsiusToFahrenheit()); // Output: 32.000000000000004
const FahrenheitTocelsius = () => {
    const fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));
    return (fahrenheit - 32) * 9 / 5;
}

// console.log(fahrenheitTocelsius()); // Output: 0


// Q22 how to convert kilometers into miles in Javascript

function kmToMiles(km) {
    return km * 0.621371;
}

// console.log(kmToMiles(10)); // Output: 6.21371

// Q23 how to convert first letter of string in uppercase|Javascript

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// console.log(capitalizeFirstLetter("hello world")); // Output: Hello World

// Q24 how to find fibonacci sequence in javascript

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(10)); // Output: 55


// Q25 How to Check the No of Occurrence of Character in String

const str1 = "Karan Singh"
const char = "a"

function countChar(str, char) {
    return str.split(char).length - 1;
}
// console.log(countChar(str1, char)); // Output: 2

// using loop iteration
const countCharacter = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
};

// console.log(countCharacter("karan singh", "a")); // Output: 2

const obj = {
    a : 1,
    b : 2,
    c : 3,
    "a" : 4,
    b : 5
}

// console.log(obj) //

var abc = 1 + xyz;
var xyz = 100;
// xyz = 100;
// console.log(abc); // Output: Error

// const data = {
//     name: "Karan Singh"
// };

// const ar = [1, 2, 3, 4, 5]
// console.log(delete data);
// console.log(delete ar); // Output: undefined
// console.log(delete ar[1]);

// const [x, y] = abc

// console.log(x); // Output: 1
// console.log(y); // Output: 1
// console.log(x, y); // Output: 1

let a = []
let b = a
// let b = []

console.log(a == b);
console.log(a === b);
















// Q26 Program to Check Armstrong Number in JavaScript 
// Q27 how to print the table of any user defined number|Javascript
// Q28 How to print star pattern in diamond shape in js













