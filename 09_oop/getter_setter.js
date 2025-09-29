class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
       this._email = value
    }

    get password(){
        return `${this._password}neha`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const neha = new user("neha@.com", "abc")
console.log(neha.email);
