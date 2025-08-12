const name = "neha"
const repoCount = 50
// console.log(name + repoCount + " Value ")
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("cricket-ball-game");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7 , 4)
console.log(anotherString);

const newStringOne = "      neha   "
console.log(newStringOne);
console.log(newStringOne.trim());   

const url = "https://neha.com/neha%20wadhwa"
console.log(url.replace("%20", "-"));
console.log(url.includes("neha"));

console.log(gameName.split("-"));