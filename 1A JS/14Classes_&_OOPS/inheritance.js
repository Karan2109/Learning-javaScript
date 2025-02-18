class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME: ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // calling parent constructor
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`${this.username} is adding a course`);
    }
}

const chai = new Teacher("chai","chai@google.com", "123");

// chai.logMe();
// chai.addCourse();

const masalaChai = new User("masalaChai");

// masalaChai.logMe();
// masalaChai.addCourse(); //masalaChai doesn't have access of Teacher class

// console.log(chai === masalaChai); // false

// console.log(chai instanceof User); // true
// console.log(chai instanceof Teacher); // true
