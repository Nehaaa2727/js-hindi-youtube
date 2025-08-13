// const tinderuser = new Object()

const tinderuser = {}

tinderuser.id ="1234abc"
tinderuser.name = "sammy"
tinderuser.isLogeedIn= false
// console.log(tinderuser);


const reguralUser = {
    email: "neha@gmail.com",
    fullname:{
        userfullname:{
            firstname:"neha",
            lastname:"wadhwa"
        }
    }
}
// console.log(reguralUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}


// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {

    },
    {

    },
    {
        id : 1,
        email: "neha@123"
    }
]
users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser)); 
// console.log(Object.values(tinderuser));
 /*helps to make the object in array*/


//  console.log(tinderuser.hasOwnProperty('isLoggedIn'));
 
const course = {
    coursename:"js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}
const {courseinstructor: instructor} = course /*value ko rename kr skte hai */
// console.log(courseinstructor);
console.log(instructor);



// apna kam ksi or ke sir par dal dene ko API khte hai for eg restru mei gye chole bhature ka order dia now its their headache to make it not ours
// {
//     "name":"neha",
//     "coursename": "js in hinde",
// } a way to write an api

