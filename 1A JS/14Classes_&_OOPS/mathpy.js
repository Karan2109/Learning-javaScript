const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);
// console.log("Math.PI");
// Math.PI = 5;
// console.log("Math.PI");

// const mynewObject = Object.create(null);

const chai = {
    name: "Ginger Chai",
    price: 250,
    issAvailable: true,

    orderChai: function() {
        console.log("Chai is not available");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", {
//     writable: false,
//     enumerable: true,
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== "funuction") {
        console.log(`${key}=${value}`); // value of chai is not itterable but after adding entries it will iterate
    }
}