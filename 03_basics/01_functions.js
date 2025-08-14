function sayMyName(){
 console.log("N");
 console.log("E");
 console.log("H");
 console.log("A");
    
}
// sayMyName() /*this is used for execution purpose*/

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}
const result = addTwoNumbers(3,5)
// console.log("Result:", result);

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3 ,"a")
// addTwoNumbers(3, null)

function loginUserMessage(username = "sam"){
    if(username === undefined){
        // console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage());


function calculateCartPrice(value1 , value2, ...num1){   /*yeh ... isko spred operator khte h used to add multiple values in a function*/
    return num1
}
console.log(calculateCartPrice(200,300,400,2000));


const user = {
    username : "neha",
    prices : 199
}

function handleObject(anyObject){
    // console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`);
    
}
handleObject(user)

const myNewArray = [200,300,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
