// Scopes in JS

function one() {
    const name = "Karan";
    function two() {
        const website = "Youtube.com";
        console.log(name); // Accessible in two()
    }
    // console.log(website); // scope of website will be in side function two cannot be called in one function 
    two();
}
one();

if (true) {
    const name = "Karan";
    if (name === "Karan") {
        const website = " Youtube";
        console.log(name + website); // Accessible in both if conditions
    }
    // console.log(website); // scope of website will be in 2nd if condition
}
// console.log(name); // Accessible in all function because it's defined globally

// +++++++++++ Intresting function +++++++++++++++

console.log(addOne(5));
function addOne(num) {
    return num + 1;
}
// console.log(addOne(5));

console.log(addTwo(5))
const addTwo = function(num) {
    return num + 2;
}
// console.log(addTwo(5))