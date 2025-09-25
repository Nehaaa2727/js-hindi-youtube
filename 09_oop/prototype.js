// let myname = "neha"
// console.log(myname.truelength);

let myheros = ["thor", "spiderman"]

let heropower = {
    thor: "hammer",
    spiderman:"sling",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.neha = function(){
    console.log(`neha us present in all objects`);
    
}

Array.prototype.heyneha = function(){
    console.log(`neha says hey`);
    
}

// heropower.neha()
myheros.neha()
myheros.heyneha()
// heropower.heyneha()

// inheritance
const user ={
    name:"neha",
    email:"neha@12"
}
const teacher = {
    makevdo : true
}
const teachingsupport = {
    isavailable: false
}

const TAsupport = {
    makeassign: 'js assign',
    fulltime: true,
    __proto__: teachingsupport
}
teacher.__proto__ =  user

// mordern syntax
Object.setPrototypeOf(teachingsupport, teacher)

let anotherusername = "chai or code    "
String.prototype.truelength = function(){
    console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
    
}

anotherusername.truelength()