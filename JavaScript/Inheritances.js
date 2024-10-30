class User{
    constructor(username){
        this.username = username;
    }

    logedMe(){
        console.log(`USERNAME is ${this.username} is logged in`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }


    addCourse(){
        console.log(`Course is added by ${this.username}`);
    }
}


const name = new Teacher("Sunil", "sunil@example.com", "123654")

name.addCourse()

const UserName = new User("Sunil Rathod")

UserName.logedMe()

console.log(Teacher === UserName)