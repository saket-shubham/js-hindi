const name = "saket";
const repoCount = 3;

// console.log(name + repoCount + "follow values"); //this is old version to write this.
// new one is here
 
// console.log(name[0]);
// console.log(repoCount.__proto__);
// console.log(name.__proto__);
// console.log(name.length);
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //***VVVIP */


/*
 Template Literals (Backticks) in JavaScript:
Backticks (`) are used in JavaScript to define template literals, which are a way to create strings.
They allow for multiline strings and easy variable interpolation using ${variable} syntax, according to Stack Overflow.
Example: let name = "World"; let message = \`Hello, ${name}!\`; 
*/



const gamename = new String('saket-gmail-com');
// console.log(gamename[5]);
// console.log(gamename.__proto__); //object
// console.log(gamename.length);
// console.log(gamename.toLocaleUpperCase());
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(4));
// console.log(gamename.indexOf('g'));

//working on "0" based indexing

//console.log(gamename.substring(0, 7));
              //or
const newstring = gamename.substring(0, 7);
//console.log(newstring);

const anotherstring = gamename.slice(-15, 4);  //VVVI
//console.log(anotherstring);

const newstringone = "  saket   ";
// console.log(newstringone.length);

// console.log(newstringone);
// console.log(newstringone.trim());

const totaladdress = "chini /20/30 mill buxar";
console.log(totaladdress.replace("/20/30", " "));

console.log(totaladdress.includes('bihar'));
console.log(totaladdress.includes('buxar'));

console.log(gamename.split('-'));





