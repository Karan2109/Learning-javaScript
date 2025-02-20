// types of Array

// continous(PACKED), holey (Both have beelow sub arrays)

//SMI (Small Integer)
//Packed element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5];
// PACKED _SMI_ELEMENTS

arrTwo.push(6.0);
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7');
// PACKED_ELEMENTS

arrTwo[10] = 11;
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// bound check
// hasOwnProperty(arrTwo,9)
// hasOwnProperty(arrTwo.prototype,10)
// hasOwnProperty(Object.prototype,11)

// holes are very expensive in JS

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree);

// SMI > DOUBLE >PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = "1" // HOLEY_ELEMENTS
arrFour[1] = "2" // HOLEY_ELEMENTS
arrFour[2] = "3" // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push("1") // PACKED_ELEMENTS
arrFive.push("2") // PACKED_ELEMENTS
arrFive.push("3") // PACKED_ELEMENTS

const arrSix = [1,2,3,4,5];
arrSix.push(null) //PACKED_DOUBLE_ELEMENTS
arrSix.push(Infinity) //PACKED_DOUBLE_ELEMENTS



