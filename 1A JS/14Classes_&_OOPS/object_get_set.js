const User = {
    _email: 'karan@google.com',
    _password: '1234',

    get email() {
        return this._email.toUpperCase();
    },
    set email(newEmail) {
        this._email = newEmail;
    },
}

// console.log(User.email); // karan@GOOGLE.COM
 
const tea = Object.create(User);
console.log(tea.email);


