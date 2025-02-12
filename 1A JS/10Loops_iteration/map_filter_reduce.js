// const coding = ["js", "react", "node", "SQL"];

// const languages = coding.forEach((lang) => {
    // console.log(`I love ${lang}`);
    // return lang; // it will always give undefined values because forEach doesn't return value or 
    // store value in variable    
// });

// console.log(languages); // o/p: undefined


// Filter method is used to filter out the new array values depends on the given condition 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNewNums = myNums.filter((num) => num > 4); // return the new array after checking the condition withou {}
// console.log(myNewNums); // o/p: [5, 6, 7, 8, 9, 10]

// const myNewNums =   myNums.filter((num) => {
//     return num > 4 // inside scope always use return keyword for to access the array values
// });

// console.log(myNewNums); // using returm to print myNewNums

// using forEach to iterate over myNewNums

// const newNum = [];
// newNum.forEach((num) => {
//     if(num > 4) {
//         newNum.push(num);
//     }
// }); 

// console.log(newNum); // o/p: [5, 6, 7, 8, 9, 10]

const books = [
    {title: "Book 1", author: "Author 1", rating: 4.5},
    {title: "Book 2", author: "Author 2", rating: 4.2},
    {title: "Book 3", author: "Author 3", rating: 4.8},
    {title: "Book 4", author: "Author 4", rating: 3.9},
    {title: "Book 5", author: "Author 5", rating: 4.7}
]

// const userBooks = books; // returns the books array
// const userBooks = books.filter( (book) => book.title === "Book 1");

// console.log(userBooks);

// map method is kind of dsme as foEach method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNumbers.map( (num) =>  num + 10)

// console.log(newNum); // o/p: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// chaining method
const newNum = myNumbers.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40);
// console.log(newNum);


// Reduce method

const total = myNumbers.reduce((acc, num) => {
    console.log(acc, num);// two variable should be used in reduce method
    return acc + num
}, 0); // "0" accmulator value it can be any number

// console.log(total);





