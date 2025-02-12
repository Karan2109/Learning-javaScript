// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == "5") {
        // console.log("Hey Koders");
    }   
    // console.log(element);
}

// console.log("element"); // Won't work out side for scope

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and outer loop value: ${i}`);
        // console.log(i + "X" +  j  + " = " + i*j);
        
    }    
}

// let myArray = ["Superman", "Batman", "Thor", "Ironman"];

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
    // console.log(element);
    
    
// }

// Keywords break & continue

// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

for (let i = 1; i < 11; i++) {
    if (i === 5) {
        // console.log("Dected 5")
        // continue;
    }
    // console.log(i);
}


// While loop 

let i = 0;
while (i <= 10) {
    // console.log(i);
    i = i + 2;
}

let myArray1 = ["Superman", "Batman", "Thor", "Ironman"];

let arrIndex = 0;
while (arrIndex < myArray1.length) {
    // console.log(`values are : ${myArray1[arrIndex]}`);
    arrIndex++;
    
}

// do-while loop

// let score = 10;

// do {
//     console.log(`Current score: ${score}`);
//     score++;
// } while (score <= 10);


// High Order array loop

// ["", "", "", "", "", "", "", ""] //string array
//[{}, {}, {}, {}] //Object with in an Array

// for of loop

const arr = [1,2,3,4,5,6,7,8];

for (const ele of arr) {
    // console.log(ele);
}

const greeting = "Hello world!";

for (const char of greeting) {
    // console.log(char);
}

// map

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

// console.log(map);

// for (const ele of map) {
//     console.log(ele); // returns an array in key value pair
// }

for (const [key, value] of map) { // Destructuring of array
    // console.log(key, ":-", value); // returns key value pair
}


const games = {
    "Superman": "Justice League",
    "Batman": "DC Comics",
    "Thor": "Marvel Comics",
    "Ironman": "Marvel Comics"
}

// for (const ele of games) { // for of loop cannot iterate over object
    // console.log(ele); //  games is not iterable 
// }



