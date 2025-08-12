// PRIMITIVE TYPES
//  7 types: string, number, boolean, null , undefined, symbol, bigInt
const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);
// const bigNumber = 1234567890123456789n

//  REFERENCE (NON-PRIMITIVE) TYPES:
//  array, objects, functions
const heros= ["thor", "spiderman", "ironman"]
let myObj = {
    name: "neha",
    age: 22,
}
const myFunction = function(){
    console.log("hello world")
}

console.log(typeof bigNumber);


//  java is static typed language . means you have to define the type of variable before using it.
//  eg. int number = 10; the type 'int ' is defined before using it.



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//    stack(Primitive)isme variable ka copy milta h, Heap(Non-Primitive) variable ka reference milta hai chamges original value mei hot hai nd whi show hota as output

let myYoutubename = "neha"
let anothername =  myYoutubename
anothername = "wadhwa"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@gmail.com",
    upi: "user@ybl",
}
let userTwo = userOne

userTwo.email = "neha@27"

console.log(userOne.email);
console.log(userTwo.email);