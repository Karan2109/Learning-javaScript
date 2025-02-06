// Function

function myName() {
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("N");
}
// myName; // function reference
// myName(); // function execution

// add 2 no function
function add(a,b) {
    return a + b;
}
// console.log(add(10,20));

function loginUserMessage(userName) {
    if(userName === "") {
        return "Invalid username";
    }
    return `${userName} just logged in`;
}
// console.log(loginUserMessage("Karan"));
// console.log(loginUserMessage(""));

function calculateCartValue(...value) { //... spreat oprator is used to calculate the entire value no need to pass extra parameter
    return value;
}
// console.log(calculateCartValue(10,20,30,40));


const user = {
    name: "Karan Singh",
    age: 25
}

function getUserDetails(anyUser) {
    return `Name: ${anyUser.name}, Age: ${anyUser.age}`;
}

// console.log(getUserDetails(user)); // how to access objects using function

const newArray = [200,500,700,900];

function getArrayValue(anyArray) {
    return anyArray;
}

// console.log(getArrayValue(newArray[1])); // how to access arrays using function

// Arrow function

const anotherUser = {
    uName: "Karan",
    age: 25,
    
    welcomeMessage: function () {
        console.log(`${this.uName}, welcome to Google!`);
        // console.log(this); // this represenent tye current context
    }
};

// anotherUser.welcomeMessage(); // context & scope of this variable
// anotherUser.uName = "Singh Saheb";
// anotherUser.welcomeMessage(); 

// console.log(this); // o/p: empty parenthesis

function chai() {
    let name = "Google"
    // console.log(this.name); // this.name is undefined
}

// chai(); // o/p: undefined

const chaiSutta = function () {
    let name = "Google"
    // console.log(this.name); // this.name is Undefined
}

// chaiSutta(); // o/p: Google

const chaiSuttaBar = () => {
    let name = "Google"
    // console.log(this.name); // this.name is undefined
}

// chaiSuttaBar(); // o/p: Google

// Arrow function does not have its own 'this' keyword, it uses the 'this' 
// keyword of its enclosing lexical scope (or the global scope if it's not inside any function)

const addTwo = (num1, num2) => { // this is a basic arrow function () => {}
    return num1 + num2; // explicit arrow function
};

// console.log(addTwo(10, 20)); // o/p: 30

// const multiplyTwo = (num1, num2) => num1 * num2; // implicit arrow function
const multiplyTwo = (num1, num2) => (num1 * num2); // implicit arrow function
// console.log(multiplyTwo(10, 20)); // o/p: 200

const name = () => ({username: "Amazon"});
// console.log(name()); // o/p: { username: "Amazon" }

// Immediately Invoked Function Expressions IIFE

(function chai() { // named IIFE functions
    console.log("Hello IIFE");
})(); // o/p: Hello IIFE

const chaiIIFE = (function () {
    console.log("Hello IIFE");
})(); // o/p: Hello IIFE

((name) => { // simple IIFE
    console.log(`DB connected ${name}`)
}) ("MYSQL");



