class User{
 constructor(username){
  this.username=username
 }
 logMe(){
  console.log(`username: ${this.username}`)
 }
 static createId(){
  return `123`
 }
}

// const mannu = new User("Mannu")
// console.log(mannu.createId())

class Teacher extends User{
 constructor(username, email){
  super(username)
  this.email = email
 }
}

const iphone = new Teacher("iphone", "iphine@abes.ac.in")
console.log(iphone.createId());