const user = {
    username : "neha",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
       console.log(this);
        
    }
}
//  user.welcomeMessage()
//  user.username = "gyan"
//  user.welcomeMessage()

//  console.log(this); /*this current context ki bat krta hai*/

// function chai(){
//     let username = "neha"
//     console.log(this.username);
    
// }
// chai()

// const chai = () => {
//     let username = "neha"
//     console.log(this);
    
// }
//  chai()

//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }
//  const addTwo = (num1, num2) =>  num1 + num2
    // const addTwo = (num1 , num2) => (num1 + num2)
 const addTwo = (num1, num2) => ({username:"neha"})
 console.log(addTwo(3,4));
 