// Date & time concepts

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);

// let sel_Dtae = new Date(2025, 0, 15)
// let sel_Dtae = new Date(2025, 0, 15, 7 ,30);
console.log(sel_Dtae);
console.log(sel_Dtae.toDateString());
console.log(sel_Dtae.toLocaleString());

// let sel_Dtae = new Date("1999-09-21")
let sel_Dtae = new Date("09-21-1999")
console.log(sel_Dtae.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(sel_Dtae.getTime());
console.log(Date.now()/1000)


// let newDates = new Date();
console.log(newDates);
console.log(newDates.getDate());
console.log(newDates.getMonth());


newDates.toLocaleString('default', {
    weekday:"long"
});










