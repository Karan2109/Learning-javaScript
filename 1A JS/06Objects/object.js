// Singleton instance
// Object.create

//symbol Datatypes
const mySym = Symbol("Key1");

//Object literal
const jsUser = {
    name: "Karan",
    age: 25,
    city: "Pune",
    email: "karan@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Momday","Saturday"],
    [mySym]: "myKey1" // symbol is used in square braces
};

// console.log(jsUser);
// console.log(jsUser.email); // access the object using dot
// console.log(jsUser["email"]); // access the object using square brackets
// console.log(jsUser[mySym]); // using symbol as key

// console.log(jsUser.email = "karan@chatgpt.com");
// Object.freeze(jsUser); // freeze the object for further change
// console.log(jsUser.email = "karan@microsoft.com");
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS users");
}
// console.log(jsUser.greeting());


jsUser.greetingTwo = function() {
    console.log(`Hello JS users, ${this.name}`);
}

// console.log(jsUser.greetingTwo());

// const tinderUser = new object(); // singleton object

const tinderUser = {}; // non-singlton object

tinderUser.name = "Raj";
tinderUser.id = "123abc";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const anotherUser = {
    email: "raj@google.com",
    fullName: {
        userFullName: {
            firstName: "Raj",
            lastName: "Singh"
        }
    }
};

// console.log(anotherUser.fullName.userFullName);


// merging / concat of 2 Objects
const obj1 = {1: "Raj", 2: "Singh"};
const obj2 = {3: "google", 4: "amazon"};

// const obj3 = {obj1 , obj2};// obj inside object
// const obj3 = Object.assign({}, obj1, obj2); // {} optiopnal parameter
const obj3 = {...obj1, ...obj2}; //using spread operatopre
//console.log(obj3);

const user = [
    {
        name: "Karan", 
        age: 25
    },
    {
        name: "Raj", 
        age: 30
    },
    {
        name: "Ramesh", 
        age: 28
    }
];

// console.log(user)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name")); //retuen boolean value

const course = {
    title: "JavaScript",
    author: "Hitesh",
    price: 1999,
    isPublished: true
}

const {author: instructor} = course; // new way to log the o/p
// console.log(author); // original value
console.log(instructor); // asigned valued to acces the data

// We get API in JSON format 




