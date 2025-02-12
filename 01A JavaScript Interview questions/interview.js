// objects of object

// array destructuring function





//function currying
function currying(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a+b+c+d;    
            }
        }
    }
}

console.log(currying(1)(2)(3)(4));

