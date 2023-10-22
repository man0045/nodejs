function name(num){
 return num*5;
}
name.power = 3;
console.log(name(5));
console.log(name.power)

function createUser(username, score){
 this.username = username
 this.score = score
}
createUser.prototype.increment=function(){
 this.score++
}
create.prototype.printMe = function(){
 console.log(`score is ${this.score}`);
}
const chai = createUser("Chai", 25)
const tea = createUser("tea", 250)

chai.printMe()