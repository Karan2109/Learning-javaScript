// Object Literals
const user = {
    name: "Karan Singh",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    hobbies: ["Reading", "Coding", "Running"],
    getUserDetails: function() {
        // console.log("Got User Details from DB...");
        // console.log(`Username: ${this.name}`);
        // console.log(this); returns the entire object
    }
}

// console.log(user.address);
// console.log(user.getUserDetails());
// console.log(this); // o/p: empty object is returned


//Constructor function 
// # new keyword is an constructor function
// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = () => {
        console.log(`Hello, ${this.username}`);
    }

    return this;
}

const userOne = new User("Karan Singh", 5, true);
const userTwo = new User("Raj Singh", 15, false); // new key is working as a constructor

// console.log(userOne);
// console.log(userTwo);
 console.log(userOne.constructor); // trying to access the constructor i.e greeting in object

// when use new keyword empty object and a instance is created
// new object is created using new constructor
// constructor function is called becoz of new keyword (wrap up all the arguments and give is to us)
// this key wors injects the instance of new key word
//
