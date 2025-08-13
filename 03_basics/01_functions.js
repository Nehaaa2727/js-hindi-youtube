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
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
console.log(loginUserMessage());
