const umane = "Karan"
const repoCount = 100;
//console.log(umane + repoCount +" repo count");  Outdated Concatination

// Template literals or back ticks
console.log(`Hello my name is ${umane} & my repo count is ${repoCount}`); // => String interpolation

const str = new String("Karan-pb");  //new way to write string
console.log(str); // check the above string in web browser for different result
console.log(str[0]); // find the vale of the index position
console.log(str.__proto__); // to check the object in web browser
console.log(str.length); // in-built function
console.log(str.toUpperCase()); // these are the inbuld string function available in web browser
console.log(str.charAt(2)); // Char at which position
console.log(str.indexOf("a")); // Char at which position

// String methods
const newStr = str.substring(0, 4); // cannot use negative values
console.log(newStr);

const str2 = str.slice(-7,4); // slice method we can give negitive arguments also
console.log(str2);

const str3 = "    Singh   "; 
console.log(str3.trim()); // remove leading and trailing spaces

const url = "http://karansingh//%20ks"
console.log(url.replace("%20", "-"));//replace method 
console.log(url.includes("karan"));
console.log(url.includes("raj"));

const str4 = "Karan Singh";
console.log(str4.split("")); // split method

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4 // ValueOF method









