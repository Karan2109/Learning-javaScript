//  looping on objects using for in loops
// for objects using for in loops
// for arrays using for of loops

const myObj = {
    js : "javascript",
    react : "reactjs",
    angular : "angularjs",
    vue : "vuejs"
}

for (let key in myObj) {
    // console.log(key, myObj[key]);
}

const programming = ["angular", "javascript", "angularjs","vuejs"]

for (const key in programming) { // for in loops provide indexno as keys in the array
    // console.log(key, programming[key]); // Output: js, react, angular, vue
}


// const map = new Map();

// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("FR", "France");

// for (const key in map) {    
//     console.log(key); // map is not iterable using for in loops

// }


/*********** forEach Loop Higher order function****************/

const coding = ["javascript","react","angular","vue"];

coding.forEach(function (language) {
    // console.log(language);
});

// for (let i = 0; i < coding.length; i++) {
//     console.log(coding[i]);
// }

coding.forEach((lang) => { // forEach using arrow functions
    // console.log(`Languages to learn: ${lang}`); 
    
});

function printMe(items) {
    // console.log(items);
};

// coding.forEach(printMe); // calling function inside foreach function/loop


coding.forEach((items, index, arr) => {
    // console.log(items, index, arr);
});


const myCodings = [
    {
        name: "javascript",
        year: 2015
    },
    {
        name: "react",
        year: 2016
    },
    {
        name: "angular",
        year: 2010
    }
];

myCodings.forEach((item) => { // forEach loop/function can access objects in the array
    // console.log(item.name, item.year);
    
    // console.log(`${item.name} was first introduced in ${item.year}`);
});