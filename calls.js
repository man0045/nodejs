function SetUsername(username){
 this.username = username
}

function createUser(username, email,password){
 SetUsername.call(this,username)
 this.email=email
 this.password
}

const chai = new createUser("chai","chai@waitForDebugger.com", "5468790")
console.log(chai);