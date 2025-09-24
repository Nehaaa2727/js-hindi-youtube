const user={
    username: "neha",
    logincount:8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
         
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, logincount, isLoggedIn){
    this.username = username;
    this.logincount= logincount;
    this.isLoggedIn= isLoggedIn

    return this
}

const userOne = new User("neha", 12, true)
console.log(userOne);

