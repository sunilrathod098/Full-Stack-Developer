//ES 
// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encrptPassword(){
//         return `${this.password}abcd`
//     }

//     changedUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const name = new User("sunil", "sunil@gmail.com", "234")

// console.log(name.encrptPassword());
// console.log(name.changedUsername())

//behind thr sence

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

}
User.prototype.encrptPassword = function(){
    return `${this.password}abcd`
}
User.prototype.changedUsername = function(){
    return `${this.username.toUpperCase()}`
}

const MyName = new User("sunil rathod", "sunilrat@gmail.com", "1234")

console.log(MyName.encrptPassword());
console.log(MyName.changedUsername())






