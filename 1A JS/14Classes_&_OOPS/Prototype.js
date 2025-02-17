// let myName = "Karan"
// let myChai = "Chai    "

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "His strength",
    spiderman: "His agility",

    getSpiderPower: function() {
        console.log(`Spidy power id ${this.spiderman}`);
    }
};

Object.prototype.karan = function() {
    console.log(`Karan is present in all objects`);
}

Array.prototype.heyKaran = function() {
    console.log(`Karan says Hello!`);
};

// heroPower.karan();
// myHeros.karan();

// myHeros.heyKaran();
// heroPower.heyKaran(); // cannoot access heyKaran becoz access has been given to Array not an Object


// #Inhertance in JS 
const user = {
    name: "John Doe",
    email: "john@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);


// let continue with the above first example
let anotherUser = "google    "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUser.trueLength();
console.log("raj".trueLength());
console.log("Swaraj".trueLength());



