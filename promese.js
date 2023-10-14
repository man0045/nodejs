const setPromese = new Promise(function(resolve, reject){
 setTimeout(function(){
  console.log("task got settled")
  resolve();
 }, 1000)
});

setPromese.then(function(){
 console.log("almost got the bell")
})

new Promise(function(resolve, reject){
 setTimeout(function(){
  console.log("Async task");
  resolve()
 }, 1000)
}).then(function(){
 console.log("Async 2 resolved");
})


const PromiseThree = new Promise(function(resolve, reject){
 setTimeout(function(){
  resolve({username: "Chai", email: "Chai@example.com"})
 }, 1000)
})

 PromiseThree.then(function(user){
  console.log(user);
 })


 const PromiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
   let error = false
   if(!error){
    resolve({username:"aman", password: "123"})
   }else{
    reject('ERROR: Something went wrong')
   }
  }, 1000)
 })
 PromiseFour.then((user) => {
  console.log(user);
  return user.username
 }).then((username) =>{
  console.log(username)
 }).catch(function(error){
  console.log(error);
 }).finally(()=>console.log("the promise is either resolved or rejected"))

 const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
   let error = true
   if(!error){
    resolve({username:"Javascript", password: "123"})
   }else{
    reject('ERRROR: JS went wrong')
   }
  }, 1000)
 });

 async function consumePromiseFive(){
  // const response = await promiseFive
  // console.log(response);

  try {
   const response = await promiseFive
   console.log(response);
  } catch (error) {
   console.log(error);
  }
 }

 consumePromiseFive()


 // async function getAllUsers(){
 //  try {
 //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
 //   const data = await response.json()
 //   console.log(data);
   
 //  } catch (error) {
 //   console.log("E: ", error);
 //  }
 // }

 // getAllUsers()

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
  return response.json()
 })
 .then((data)=>{
  console.log(data);
 })
 .catch((error)=>console.log(error))