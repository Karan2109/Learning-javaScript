// After ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptedPassword() {
        // Encrypt password using a library
        return `${this.password}abc`;
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const chai = new User("chai", "chai@google.com","123");

console.log(chai.encryptedPassword()); // "123abc"
console.log(chai.changeUsername()); // CHAI 


// Behind the scenes
// using function

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptedPassword = function() {
    // Encrypt password using a library
    return `${this.password}abc`;
}

User.prototype.changeUsername = function() {
    // Encrypt password using a library
    return `${this.username.toUpperCase()}`;
}
const tea = new User("Tea", "tea@google.com","123");

console.log(tea.encryptedPassword()); // "123abc"
// console.log(tea.changeUsername()); // CHAI
