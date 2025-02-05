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

console.log(getArrayValue(newArray[1])); // how to access arrays using function

