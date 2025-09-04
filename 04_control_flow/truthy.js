const userEmail= []

if(userEmail){
    console.log("got the user email");
    
} else{
    console.log("dont have the user email");
    
}

// FALSY VALUES
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10 phle value ayegi
// val1 = null ?? 10 isme null ko skip krke next jo hoga usko call krta h 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);


// TERNARY OPERATOR
// condition? true: false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")

