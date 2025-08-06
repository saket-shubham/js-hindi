 //  primitive data types

 // 7 types: String, Number, Boolean, null, undefined, symbol, Bigint


 const score = 44;
 const scorevalue = 100.3;
 const loggedin = false;
 const outsidetemp = null;
 let useremail;
 const id = Symbol('123');
 const anotherId = Symbol('123');
 
 console.log(id === anotherId);
 

 const bigNumber = 12938754873047349728n;
console.log(typeof bigNumber);


 /* 
   javaScript is a dynamically typed language, not a statically typed one. 
This means that:  Type checks are performed at runtime:
The type of a variable is determined when the code is executed, not during a separate compilation step.
Variable types can change:
A single variable can hold values of different data types throughout the program's execution. For example,
a variable that initially holds a number can later be assigned a string or an object.
*/




 // Reference type(nin primitive)

 //  Arrays, Objects, Functions

 // Arrays
 const heros = ["saktiman", "naagraj", "doga"]

 // Objects

 // we can also gives values 
let myObj = {
    name :  "saket", // objects // we should use : operate here 
    age : 23,  //  objects   // we should use : operate here 
}


// functions

const myfunction = function(){
  console.log("hello world");
  
}