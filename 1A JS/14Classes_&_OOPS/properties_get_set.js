// Function Based Syntax
function User(email, password) {
    this.email = email;
    this.password = password;

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, "password", {
        get: function() {
            return this._password.toUpperCase();
        },
        set: function(value) {
            this._password = value;
        }
    });
}

const user = new User("john.doe@example.com", "P@ssw0rd123");

console.log(user.email); // JOHN.DOE@EXAMPLE.COM