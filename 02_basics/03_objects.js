//  SINGLETON litreals ki  trah declare karenge toh singleton nhi bnta hai . agr constructor ki trah bnaynge toh singleton bnta h 


//  object literals

const mySym = Symbol("key1")


const Jsusers = {
    name: "neha",
    "fill name" : "neha wadhwa",
    [mySym]: "mykey1",
    age : 21,
    location: "jaipur",
    email: "neha@123.com",
    isLoggedIn: false,
    lastLogindays : ['monday', 'saturday']
}

// console.log(Jsusers.email);
// console.log(Jsusers["email"]);
// console.log(Jsusers["full name"])
// console.log(Jsusers[mySym]);

Jsusers.email = "nehachatgpt@27.com"
Object.freeze(Jsusers)
Jsusers.email = "nehagood27@.com"
// console.log(Jsusers);

// Jsusers.greeting = function(){
//     console.log("hello js user");
// }
// Jsusers.greetingTwo = function(){
//     console.log(`hello js users, ${this.name}`);
// }
// console.log(Jsusers.greeting());
// console.log(Jsusers.greetingTwo());