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

let arr = 0;
while (arr < myArray1.length) {
    // console.log(`values are : ${myArray1[arr]}`);
    arr++;
    
}

// do-while loop

let score = 10;

do {
    console.log(`Current score: ${score}`);
    score++;
} while (score <= 10);


