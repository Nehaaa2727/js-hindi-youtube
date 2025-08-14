var c = 400
let a = 300 /*global scope*/

if (true){   /*block scope*/
    let a = 10
    const b = 20
    // console.log("inner:", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "neha"

   function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
  two()
}
// one()

if (true){
  const username = "neha"
  if(username === "neha"){
    const website = " youtube"
    console.log(username + website);
    
  }
  // console.log((website));
  
}
// console.log(username);



//  ################  intresting   #############################

console.log(addone(5));

function addone(num){
  return num + 1

}

addtwo(5) /* this is called hosting where it shows us error */
const addtwo = function(num){
  return num + 2
}
