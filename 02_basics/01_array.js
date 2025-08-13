//  ARRAY

const myArr = [0,1,2,3,4,5]
const myHeros = ["spiderman", "ironman","batman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(myArr[3]);

// ARRAY METHODS
// myArr.push(6)
// myArr.push(7)
// myArr.pop() /*simply remove the last elemnt*/
// console.log(myArr);

// myArr.unshift(8)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr);

// #######################   slics, spice    ##############################
console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);