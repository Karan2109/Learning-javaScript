class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Hello, ${this.username}`);
    }

    static createID() {
        return `123`;
    }
}

const karan = new User("Karan");
// console.log(karan.createID()); // Karan


class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");

// console.log(iphone.username); // iphone
// console.log(iphone)

console.log(iphone.createID()); // error becoz of sststic key words

