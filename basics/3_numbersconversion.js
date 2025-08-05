let score = "saket"

console.log(typeof score);    // string
console.log(typeof (score)); // string
let value1 = Number(score);   // converting string to number
console.log(typeof value1);   // number
console.log(value1);         // NaN ==> Not a Number
console.log("\n")



let score1 = "33"           // string
console.log(typeof score1);    // string
console.log(typeof (score1));     // string
let valueInNumber = Number(score1);   // converting string to number
console.log(typeof valueInNumber);    // number
console.log(valueInNumber);      // 33
console.log("\n")




let score2 = "33abc";           // string
console.log(typeof score2);      // string
// console.log(typeof (score2));   // string
let value = Number(score2);     // converting string to number
console.log(typeof value);      // number
console.log(value);   //NaN ==> not a Number
console.log("\n")



let score3 = null;          // null
console.log(typeof score3);  // object (this is a known JavaScript quirk)  
console.log(typeof (score3)); // object
let value3 = Number(score3);   // converting null to number
console.log(typeof value3);    // number 
console.log(value3);         // 0 (null is converted to 0 in number conversion)
console.log("\n")



let score4 = undefined;  // undefined
console.log(typeof score4);   // undefined
// console.log(typeof (score4)); // undefined
let value4 = Number(score4);   // converting undefined to number
console.log(typeof value4);    // number
console.log(value4);    // NaN (undefined is converted to 
console.log("\n")


let score5 = true;    // boolean
console.log(typeof score5);    // boolean 
// console.log(typeof (score5));   // boolean
let value5 = Number(score5);   // converting boolean to number   
console.log(typeof value5);    // number
console.log(value5); // 1 (true is converted to 1 in number conversion)
// console.log("\n")


//"33" -> 33
//"33abc" -> NaN
//null -> 0
//undefined -> NaN
//true -> 1; false -> 0
// console.log("\n")
let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn); 
console.log("\n" +booleanisLoggedIn); 

//1 -> true; 0 -> false; 
// "" -> false; 
// "saket" -> true;


console.log("\n")
let someNumber = 33
let stringNumber = String(someNumber); // converting number to string
console.log(typeof stringNumber); // string
console.log(stringNumber); // "33"