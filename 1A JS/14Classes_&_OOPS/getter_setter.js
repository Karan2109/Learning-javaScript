class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email.toLowerCase();
    }
    set email(value) {
        this._email = value;
    }

    get password() {
        // return this._password.toUpperCase();
        return `${this._password}karan`;
    }
    set password(value) {
        this._password = value;
    }
}

const karan = new User("karan@google.com", "abc");

console.log(karan); // User { email: 'karan@gppgle.com', password: '123' }

