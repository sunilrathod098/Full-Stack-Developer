class User{
    constructor(username){
        this.username = username;
    }

    logedMe(){
        console.log(`User ${this.username} is logged in`);
    }

    createID(){
        return '123545'
    }
}

const sunil = new User("Sunil Rathod")
console.log(sunil.createID)


class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const vivo = new Teacher("VivoX50", "vivo@gmail.com")
console.log(vivo.createID())