console.log('hello world')
var number1 = 34;
var number2 = 45;
console.log(number1+number2);
// data types in javascript
//number
var num1=455;
var num2=76.9;
//string
var str1 = "this is a string";
var str2 = 'this is also another string'
//object
var marks = {
    ravi: 34,
    shubham: 78,
    mannu: 99.99
}
console.log(num1 + num2);
console.log(str1,str2);
console.log(marks);
/*
at a very high level ,there are two types of data types in javascript
1. primitive datatypes: undefined ,null ,number ,string ,boolean ,symbol
2. reference data types
*/
// javascript function
//DRY function do not repeat your self
function avg(a,b){
    return(a+b)/2;
}
c1=avg(34,57);
c2=avg(333,67);
console.log(c1,c2);
//conditional statement in javascript
var age=9;
if(age<10){
    console.log('you are a kid');
}
else{
    console.log('you are not a kid');
}