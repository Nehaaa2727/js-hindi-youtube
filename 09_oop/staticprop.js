class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const neha = new User("neha")
// console.log(neha.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
      this.email = email  
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();
