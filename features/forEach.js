const arr = [1,2,3];
arr.forEach((value) => console.log(value*value));  //prints 1 4 9


/*
forEach iterates over an array and runs a function for each element, 
but it doesn’t create a new array or return the results of the callback. 
Its purpose is side effects (e.g., logging, mutating something), and it returns undefined
*/

//what we did above could be considered 'logging'.

//The base arr itself can be mutated in the following way:

arr.forEach((value, i) => arr[i] = value*value);
console.log(arr);  //prints [ 1, 4, 9 ]


// This returns the following output:   [ 1, 4, 9 ] undefined
const arr2 = [1, 2, 3];
let newArr = arr2.forEach((value, index) => arr2[index] = value * value);
console.log(arr2, newArr);

//Use `map` if you want to return the modified array in a new variable

