// //  foreach koi bhi value return nhi krta hai
// const coding = ["js", "rube", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);


// filter return krta h value ko in this we have to mention a condition , if our condition is true then it will return
// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newmyNums = myNums.filter( (num) => {
//    return num > 4
// })
// console.log(newmyNums);
 

const books = [
    { title: 'book one', genre:'fiction', publish: 1981, edition: 2004},
    { title: 'book two', genre:'non-fiction', publish: 1992, edition: 2008},
    { title: 'book three', genre:'history', publish: 1999, edition: 2007},
    { title: 'book four', genre:'non-fiction', publish: 1989, edition: 2010},
    { title: 'book five', genre:'science', publish: 2009, edition: 2014},
    { title: 'book six', genre:'fiction', publish: 1987, edition: 2010},
    { title: 'book seven', genre: 'history', publish: 1986, edition: 2025},
];
let userbooks =books.filter( (bk) => bk.genre === 'history')
 userbooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "history"
})
console.log(userbooks);
