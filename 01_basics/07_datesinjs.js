// DATES

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 12)
// let myCreatedDate = new Date(2025, 0, 23, 5, 3)
let myCreatedDate = new Date("2025-02-15")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// 

let newDate = new Date()
console.log(newDate);

newDate.toLocaleString('default', {
    weekday: "narrow",
})