/*
Template literals, introduced in ECMAScript 2015 (ES6), are a way to define strings 
in JavaScript using backticks (``) instead of single (') or double quotes (").

Their usecases:
*/

// 1. String Interpolation
const name = "Leo";
console.log(`Hello, ${name}!`);

// 2. You can use full expressions inside ${}:
const a = 5;
const b = 10;
console.log(`The sum is ${a + b}`); // The sum is 15

// 3. You can even call functions:
const getAge = () => 30;
console.log(`Age is ${getAge()}`); // Age is 30

// 4. Multi-line Strings
const str1 = `Line 1
Line 2`;
console.log(str1);
const str2 = `
    Line 1
    Line 2`;
console.log(str2);  //console while keeping the format
